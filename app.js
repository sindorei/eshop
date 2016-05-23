var express = require('express');
var app = express();
var path = require('path');
app.get('/',function(req , res) {
    res.render('register');
});

app.listen(8090);

//设置视图存放目录
app.set('views', path.join(__dirname, 'views'));
//设置静态资源访问路径
app.use(express.static(path.join(__dirname , 'static')));

// 修改模板文件的后缀名为html
app.set( 'view engine', 'html' );
// 运行ejs模块
app.engine( '.html', require( 'ejs' ).__express );
