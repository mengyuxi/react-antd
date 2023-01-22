// 请求域名
const test = "http://localhost:3000/";
//mockapi模拟数据地址
const development = "http://localhost:3000/";

export const BASE_API = process.env.NODE_ENV === 'development' ? development : test;