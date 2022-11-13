import { observable, action, runInAction } from 'mobx';
import * as api from '../../api/index';
import { setLocalStorage } from "../../util/index";

export default class UserStore{
    constructor() {}

    @observable
        user;

    @observable
        userList;

    @action
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

    @action
    async getUserList() {
        const res = await api.getUserList();
        if(res.data){
            runInAction(()=>{
                this.userList = res.data.list;
                console.log('用户列表---', this.userList);
            });
        }
    }
}