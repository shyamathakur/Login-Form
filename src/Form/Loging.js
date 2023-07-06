import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'antd/dist/reset.css';
import axios from 'axios';
import "./Login.css";
import login from "../Image/login.png"
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Loging() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const onFinish = (value) => {
        console.log("welcome", value);
        axios
            .post("https://nearbyplaceadminpanner.onrender.com/api/v1/login", {
                'email': value.email,
                'password': value.password
            }, {
            })
            .then((res) => {
                navigate("/dashboard");
                if (res.data.success) {
                    message.success(res.data.message);
                } else {
                    message.error(res.data.message);
                }
            })
            .catch((error) => {
                message.error('something went wrong');
                console.log("something went wrong", error);
            });
    }
    return (
        <div className='main-div-inform'>
            <Container className='login-main-div'>
                    <Row className='first-row'>
                        <img src={login} />
                    </Row>
                    <Row className='second-row'>
                        <Form className='form'
                            name="normal_login"
                            initialValues={{ remember: true, }}
                            onFinish={onFinish}>
                            <div className='welcome-div'>
                                <p className='welcome'>Welcome</p>
                            </div>
                            <h2 className='login-heading'>Login To Your Account</h2>
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
                    </Row>
            </Container>
        </div>
    );
};
export default Loging;

