import React, { useState, Suspense, useEffect } from 'react';
import { Avatar, Dropdown, Layout, Menu, Space } from 'antd';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import routerConfig from '../../router';
import { getLocalStorage, getSessionStorage, setSessionStorage } from "../../util";
import './index.less';
import { UserOutlined, DownOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const Home = (props) => {
    const navigate = useNavigate();
    const userInfo = getLocalStorage("userInfo");
    const selectNav = getSessionStorage("selectNav");

    const [collapsed] = useState(false);
    const [navLink, setNavLink] = useState([]);
    const [defaultSelectedKeys] = useState(selectNav || '/home/goods');

    useEffect(()=>{
        console.log('_location路由地址------', location.hash);
    },);
    useEffect(() => {
        if(!userInfo){
            console.log('---未登录---');
            navigate("/");
        }
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

    //菜单选择
    const selectNavChange = (e) => {
        setSessionStorage('selectNav', e.key);
    };

    //退出登录
    const logout = ()=>{
        localStorage.clear();
        sessionStorage.clear();
        navigate('/');
    };
    return (
        <Layout className='home-main'>
            <Sider trigger={null} collapsible collapsed={collapsed}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div className="title"> react框架构建 </div>
                <Menu
                    className='menu'
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[defaultSelectedKeys]}
                    onClick ={selectNavChange}
                    items={navLink}
                />
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', padding: '0' }}>
                    <div className="user-info">
                        <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <div className="user-name">
                                        <Avatar size="large" icon={<UserOutlined />} style={{ color: '#f56a00', backgroundColor: '#fde3cf', paddingLeft: "7px" }}/>
                                        <span>{userInfo.username}</span>
                                        <DownOutlined style={{ fontSize: "12px" }}/>
                                    </div>
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
