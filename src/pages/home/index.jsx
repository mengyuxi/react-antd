import React, { useState, Suspense, useEffect } from 'react';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Routes, Route, useNavigate, Outlet, NavLink } from "react-router-dom";
import routerConfig from 'routerConfig';

import About from '../goods';
import List from '../list';

import './index.less';

const { Header, Sider, Content } = Layout;

const Home = (props) => {
    const [collapsed, setCollapsed] = useState(false);  

    const navigate = useNavigate();
    const navClick = (e) => {
        //路由跳转
        navigate(e.key)
    };
    

    return( 
    <Layout className='home-main'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="title"> 框架构建demo </div>
            <Menu
                className='menu'
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['/home/goods']}
                onClick={navClick}
                items={[
                    {
                        key: '/home/goods',
                        icon: <UserOutlined />,
                        label: "商品"
                    },
                    {
                        key: '/home/list',
                        icon: <VideoCameraOutlined />,
                        label: "列表"
                    }
                ]}
            />
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}></Header>
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
            >
                <Suspense fallback={<div>loading</div>}>
                    {/* Outlet相当于vue的router-view */}
                    <Outlet/>
                </Suspense>
            </Content>
        </Layout>
    </Layout>
    )
};


export default Home;