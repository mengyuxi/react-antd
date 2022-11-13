#  express 官网地址：https://www.expressjs.com.cn/
## express 4.0
集成来中间件 body-parser可以直接使用，multer需要安装
```angular2html
    npm install multer -S  // for parsing multipart/form-data
```
```angular2html
    const express = require('express');
    const multer = require('multer') 
    const upload = multer() // for parsing multipart/form-data

    app.use(express.json()) // for parsing application/json
    app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

    //post请求
    app.post('/profile', function (req, res, next) {
        console.log(req.body)
        res.json(req.body)
    })
    
    //multipart/form-data 请求头格式
    app.post('/upload', upload.array(), function (req, res) {
        console.log(req.body)
        res.json(req.body)
    })
```

## express 5.0 （aipha）
中间件已经分离，需要安装中间件 multer body-parser
```angular2html
    npm install multer -S  // for parsing multipart/form-data
    npm install body-parser -S 
```
配置
```angular2html
    const express = require('express');
    const bodyParser = require('body-parser')
    const multer = require('multer') 
    const upload = multer() // for parsing multipart/form-data
    
    app.use(bodyParser.json()) // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


    //post请求
    app.post('/profile',  function (req, res, next) {
        console.log(req.body)
        res.json(req.body)
    })

    //multipart/form-data 请求头格式
    app.post('/upload', upload.array(), function (req, res) {
        console.log(req.body)
        res.json(req.body)
    })
```
## 跨域问题
```angular2html
    // 解决跨域问题
    app.all("*",function(req,res,next){
        res.header("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Allow-Headers','content-type,x-custom-header');
        next();
    });
```
## 启动 
进入文件目录 node server （server文件名称）
```angular2html
    node server 
```