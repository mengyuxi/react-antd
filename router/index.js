import React, { lazy } from 'react';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const Goods = lazy(() =>
    import(/* webpackChunkName: "Goods" */ 'pages/goods')
);
const List = lazy(() =>
    import(/* webpackChunkName: "List" */ 'pages/list')
);
const router = [
    {
        path: '/home/goods',
        component: Goods,
        name: '商品页',
        icon: <UserOutlined/>

    },
    {
        path: '/home/list',
        component: List,
        name: '列表页',
        icon: <VideoCameraOutlined/>
    }
];

export default router;
