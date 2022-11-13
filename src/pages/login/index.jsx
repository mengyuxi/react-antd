import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
// import { inject, observer } from 'mobx-react'; //类组件需要引入
import useRootStore from "../../store";

import './index.less';


/*
* 类组件可以用装饰器引入store,不用important,然后直接使用即可
*@inject('userStore')
*@observer
*/
function Login (props) {
    const [username, setUserName] = useState("admin");
    const [pwd, setPwd] = useState("123");

    const navigate = useNavigate();
    /*类组件不需要这一步*/
    const { userStore } = useRootStore;
    const onFinish = (values) => {
        /* history 的push模式*/
        // navigate('/home');
        /* history 的replace模式*/
        // navigate('/home',{ replace: true })

        /*通过userStore调用登录方法跳转*/
        const data = {
            username,
            pwd
        };

        userStore.login(navigate, data);
    };

    const usernameChange = (e)=>{
        setUserName(e.target.value);
    };
    const pwdChange = (e)=>{
        setPwd(e.target.value);
    };
    return (
        <div className="login">
            <div className="login-content">
                <div className="title" onClick={onFinish}>
                    react + antd
                </div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: false }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        initialValue="admin"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        onChange = {(e)=>usernameChange(e)}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        initialValue="admin"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        onChange = {(e)=>pwdChange(e)}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>

    );
}
export default Login;
