import React, { useState, Suspense, useEffect } from 'react';
import { Avatar, Dropdown, Layout, Menu, Space } from 'antd';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import routerConfig from '../../router/index';
import { getLocalStorage } from "../../util/index";
import './index.less';
import { DownOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const Home = (props) => {
    const [collapsed] = useState(false);
    const [navLink, setNavLink] = useState([]);

    const navigate = useNavigate();
    const userInfo = getLocalStorage("userInfo") || '';

    useEffect(() => {
        // 生成菜单路由
        const NavLinkRes = [];
        routerConfig.forEach((item) => {
            NavLinkRes.push(
                {
                    key: item.path,
                    icon: item.icon,
                    label: <NavLink to={item.path}>{item.name}</NavLink>
                }
            );
        });
        setNavLink(NavLinkRes);
    }, []);


    const items = [
        {
            key: '1',
            label: (
                <div onClick={()=>logout()}>
                    退出登录
                </div>
            ),
        }
    ];

    //退出登录

    const logout = ()=>{
        localStorage.clear();
        navigate('/');
    };
    return (
        <Layout className='home-main'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="title"> 框架构建demo </div>
                <Menu
                    className='menu'
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['/home/goods']}
                    items={navLink}
                />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <div className="user-name-wrap">

                        <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className="user-name">
                                    <Avatar>U</Avatar>
                                    <span >{userInfo.username}</span>
                                    <DownOutlined style={{ fontSize: "12px" }}/>
                                </Space>
                            </a>
                        </Dropdown>
                    </div>

                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280
                    }}
                >
                    <Suspense fallback={<div>loading</div>}>
                        {/* Outlet相当于vue的router-view */}
                        <Outlet/>
                    </Suspense>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;
