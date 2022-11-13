import React, { Suspense } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from 'antd';
import { Provider } from 'mobx-react';
import store from './store';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import routerConfig from './router/index';

import Login from 'pages/login';
import Home from 'pages/home';

import './App.less';

export default function App() {
    const HomeIndex = routerConfig[0]?.component;

    return (
        <ConfigProvider locale={zh_CN}>
            <Provider {...store}>
                {/* BrowserRouter 对应history模式  HashRouter对应hash 模式 */}
                <HashRouter>
                    {/* react-router-dom v6 使用“Routes”代替“Switch”  */}
                    <Suspense fallback={<div>loading</div>}>
                        <Routes>
                            <Route path="/" element={<Login/>}/>
                            <Route path="/home" element={<Home/>}>
                                {/* 二级路由 */}
                                <Route index element={<HomeIndex/>}/>
                                {
                                    routerConfig.map(item=>{
                                        return (
                                            <Route path={item.path} key={item.path} element={<item.component/>} />
                                        );
                                    })
                                }
                            </Route>
                            <Route path="*" element={<Login/>}/>
                        </Routes>
                    </Suspense>
                </HashRouter>
            </Provider>
        </ConfigProvider>
    );
}
