
//引入依赖
var express=require('express');
var superagent=require('superagent');
var cheerio=require('cheerio')

//建立express实例
var app=express();

console.log('start......');
app.get('/',function(req,res,next){
    //
    superagent.get('https://cnodejs.org/')
    .end(function(err,sres){
        //
        if (err) {
            return next(err);
        }
        //
        //
        
        var $=cheerio.load(sres.text);
        // console.log(sres.text);
        var items=[];
        $('#topic_list.topic_title').each(function(idx,element){
            var $element=$(element);
            items.push({
                title:$element.attr('title'),
                href:$element.attr('href')
            });
        });
        res.send(items);
        for (var i = 0; i < items.length; i++) {
            console.log(items[i])
            
        }
        

    });

})

app.listen(3000,function(req,res){
    console.log('app is running at port 3000');
})

console.log('end...')