import request from '../util/request';

export function login(data){
    return request({
        method: "POST",
        url: 'login',
        data
    });
}


export function getUserList(url, data = {}){
    return request({
        method: "GET",
        url: "userList",
        params: data
    });
}