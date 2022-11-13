import React, { useEffect, useRef } from 'react';
import useRootStore from "../../store";
import { Table } from "antd";

function List (props) {
    const ifr = useRef(null);

    const { userStore } = useRootStore;

    //iframe实现微前端加载其它项目
    useEffect(()=>{
        window.addEventListener('message', e => {
            console.log('另一个项目传输过来参数', e.data);
        });

        userStore.getUserList();
    }, []);

    const handClick = ()=>{
        let data = 'xxxxxxx';
        ifr.current.contentWindow.postMessage(data, '*');
    };


    const columns = [
        {
            title: '姓名',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: '用户头像',
            dataIndex: 'userImg',
            key: 'userImg',
        },
        {
            title: '电话',
            dataIndex: 'userPhone',
            key: 'userPhone',
        },
        {
            title: '住址',
            dataIndex: 'userAddress',
            key: 'userAddress',
        },
    ];

    return (
        <>
            <h1 onClick={handClick}>列表页</h1>
            <Table dataSource={userStore.userList} columns={columns} />
            {/*<iframe src="http://localhost:3000/" frameBorder="0" ref={ifr}></iframe>*/}
        </>
    );
}

export default List;
