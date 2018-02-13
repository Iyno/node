
//引入依赖
var express=require('express');
var utility=require('utility');

//建立express实例
var app=express();

app.get('/',function(req,res){
    //从req.query中取出我们的q参数
    //如果是post传来的body数据，则是在req.body里面，不过express默认不处理body中的信息，
    //需要引入 https://github.com/expressjs/body-parser 这个中间件才会处理，这个后面会讲到
    //
    var q=req.query.q;

    //调用utility.md5方法，得到md5之后的值
    //之所以用utility这个库来生成md5值，其实只是习惯问题
    //utility的github地址：https://github.com/node-modules/utility
    var md5Value=utility.md5(q);
    res.send(md5Value);
});

app.listen(3000,function(req,res){
    console.log('app is running at port 3000');
})

