import React,{ Suspense } from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import routerConfig from 'routerConfig';
import Login from 'pages/login';
import Home from 'pages/home';

import './App.less';

export default function App() {
    const HomeIndex = routerConfig[0]?.component;

    return (
        <ConfigProvider locale={zh_CN}>
            <HashRouter>
                {/* react-router-dom v6 使用“Routes”代替“Switch”  */}
                <Suspense fallback={<div>loading</div>}>
                    <Routes>
                        <Route path="/"  element={<Login/>}/>
                        <Route path="/home"  element={<Home/>}>
                            <Route index element={<HomeIndex/>}/>
                            {
                                routerConfig.map(item=>{
                                    return (
                                        <Route path={item.path}  key={item.path} element={<item.component/>} />
                                    )
                                })
                            }
                        </Route>
                        <Route path="*"  element={<Login/>}/>
                    </Routes>
                </Suspense>
            </HashRouter>
       </ConfigProvider>
    );
}
