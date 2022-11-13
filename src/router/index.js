import React, { lazy } from 'react';
import { UserOutlined, VideoCameraOutlined, CopyOutlined } from '@ant-design/icons';

const Goods = lazy(() =>
    import(/* webpackChunkName: "Goods" */ 'pages/goods')
);
const List = lazy(() =>
    import(/* webpackChunkName: "List" */ 'pages/list')
);
const Md = lazy(() =>
    import(/* webpackChunkName: "Md" */ 'pages/md')
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
    },
    {
        path: '/home/md',
        component: Md,
        name: '文档',
        icon: <CopyOutlined />
    }
];

export default router;
