import React, { useState } from 'react';
import 'antd/dist/reset.css';
import axios from 'axios';
import "./Login.css";
// import login from ".login.png"
import login from "./login.png"
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

function Loging() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const onFinish = (value) => {
        console.log("hjucndjcnhdhfcnd", value);
        axios
            .post("https://nearbyplaceadminpanner.onrender.com/api/v1/login", {
                'email': value.email,
                'password': value.password
            }, {
            })
            .then((res) => {
                if (res.data.success) {
                    message.success(res.data.message);
                    // alert("Succes")
                } else {
                    console.log(res.data.message);
                    message.error(res.data.message);
                    alert("Failed");
                }
            })
            .catch((error) => {
                alert("wrong")
                console.log("An error occurred:", error);
            });
    }
    return (
        <div className='main-div-inform'>
            <div className='login-main-div'>
                <div>
                    <img src={login} />

                </div>
                <Form className='form'
                    name="normal_login"
                    initialValues={{ remember: true, }}
                    onFinish={onFinish}>
                    <div className='welcome-div'>
                        <p className='welcome'>Welcome</p>
                    </div>
                    <h2 className='heading'>Login Your Account</h2>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!', },]}>
                        <Input
                            allowClear
                            value={user.email}
                            prefix={<MailOutlined />}
                            type="email"
                            placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!', },]} >
                        <Input.Password
                            value={user.password}
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='submit' >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default Loging;

