const Mock = require('mockjs');
const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer(); // for parsing multipart/form-data

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// 解决跨域问题

app.all("*", function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'content-type,x-custom-header');
    next();
});

/*当是Multipart/form-data的请求头时，需要给post第二个参数加upload.array()
  实例 ：
  app.post('/upload',upload.array(), function (req, res) {})
*/
app.post('/upload', upload.array(), function (req, res) {
    //post获取参数
    res.send({
        user: req.body
    });
});


app.post('/login', function (req, res) {
    //post获取参数 req.body
    res.send({
        user: req.body
    });
});

app.get('/userList', function (req, res) {
    //get获取参数 req.query
    // const params = req.query;
    //mock生成模拟数据
    const data = Mock.mock({
        "list|10": [
            {
                "id|+1": 1, //生成id，自增1
                "userName": "@cname", //生成姓名(这里生成的是中文名称)
                "userImg": "@Image('100*40','#c33','#ffffff','商品')", //生成随机图片(大小/背景色/字体颜色/文字信息),打印的是图片地址
                "userAddress": "@county(true)", //随机生成地址
                "userDate": "@date('yyyy-MM-dd')", //随机生成yyyy-MM-dd格式的日期
                "userPhone": /^1(5|3|7|8)[0-9]{9}$/, //随机生成电话号码
                "userStart|1-5": "★", //随机生成1至5个指定的图形(★)
            },
        ]
    });

    res.json({
        list: data.list
    });
});

app.listen(3000, ()=>{
    console.log("服务地址:http://localhost:3000/");
});
