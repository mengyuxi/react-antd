import React, { lazy } from 'react';

const Goods = lazy(() =>
    import( /* webpackChunkName: "Goods"*/ 'pages/goods')
);
const List = lazy(() =>
    import( /* webpackChunkName: "List"*/ 'pages/list')
);
const router = [
    {
        path: '/home/goods',
        component: Goods,
        name: '关于'
    },
    {
        path: '/home/list',
        component: List,
        name: '列表页'
    },
]

export default router;