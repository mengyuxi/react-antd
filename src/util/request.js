import axios from 'axios';
import { message } from 'antd';
import { BASE_API } from '../config';
import { getLocalStorage } from './index';

const service = axios.create({
    baseURL: BASE_API,
    timeout: 5000,
    headers: { 'X-Custom-Header': 'foobar' }
});

// 请求拦截器
service.interceptors.request.use(function (config) {
    const token = getLocalStorage('userInfo')?.token;
    if(token){
        config.headers['token'] = token;
    }
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    return config;
}, function (error) {
    return Promise.reject(error);
});

//响应拦截器
service.interceptors.response.use(function (response) {
    if (response.status !== 200) {
        message.error(
            `发送request失败${JSON.stringify(response)},方法名：${response.request.responseURL}`
        );
        return Promise.reject(new Error('网络异常，请稍后重试'));
    }
    return response;
}, function (error) {
    //报错返回401，一般是token失效，重新登录
    if(error?.response?.status === 401){
        localStorage.clear();
        sessionStorage.clear();
        location.href = "/";
    }
    return Promise.reject(error);
});

export default service;