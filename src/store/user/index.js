import { runInAction, makeAutoObservable } from 'mobx';
import * as api from '../../api/user';
import { setLocalStorage } from "../../util/index";

export default class UserStore{
    constructor() {
        // 对初始化数据进行响应式处理 mobx v6不支持装饰器写法了
        makeAutoObservable(this);
    }

    loading = true;

    user = {};

    userList = [];

    //登录
    async login(navigate, params) {
        const res = await api.login(params);
        if(res.data){
            runInAction(()=>{
                const userInfo = res.data?.user;
                this.user = userInfo;
                setLocalStorage("userInfo", userInfo );
                navigate('/home');
            });
        }
    }

    //获取用户列表
    async getUserList() {
        const res = await api.getUserList();
        if(res.data){
            runInAction(()=>{
                this.userList = res.data?.list;
                this.loading = false;
            });
        }
    }

    //销毁组件时重置参数
    reset(){
        this.user = {};
        this.userList = [];
        this.loading = true;
    }
}