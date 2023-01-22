import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite'; // 从mobx-react-lite内部引入observer让mobx与react进行关联
import useRootStore from "../../store";
import { Table } from "antd";

function List (props) {
    //iframe实现微前端加载其它项目
    // const ifr = useRef(null);
    const { userStore } = useRootStore;

    useEffect(()=>{
        //iframe实现微前端加载其它项目
        /*window.addEventListener('message', e => {
            console.log('另一个项目传输过来参数', e.data);
        });*/
        userStore.getUserList();
        //销毁组件
        return ()=>{
            userStore.reset();
        };
    }, []);

    const handClick = ()=>{
        //iframe实现微前端加载其它项目 向一个项目传递参数
        /*  let data = 'xxxxxxx';
        ifr.current.contentWindow.postMessage(data, '*');*/
        userStore.getUserList();
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
            <Table dataSource={userStore.userList} columns={columns} rowKey={record => record.id}/>
            {/*iframe实现微前端加载其它项目*/}
            {/*<iframe src="http://localhost:3000/" frameBorder="0" ref={ifr}></iframe>*/}
        </>
    );
}

export default observer(List);
