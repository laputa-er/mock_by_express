var express = require('express'),
app = express(),
querystring = require('querystring'),
path = require('path');

/*模版引擎*/
app.set('view engine', 'jade');

/*静态文件*/
// app.use(express.static(path.join(__dirname, '')));

/*跨域设置*/
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

/*路由设置*/
app.get('/index.php/Mobile/Weijson/wxAudit', function(req, res){
	res.json(require('../ajaxJsons/qgzs_fe/wsAudit'));
})

app.get('/index.php/Mobile/Weijson/getWsInfo', function(req, res){
	res.json(require('../ajaxJsons/qgzs_fe/getWsInfo'));
})

app.get('/index.php/Mobile/WsWap/countWsUsers', function(req, res){
	res.json(require('../ajaxJsons/qgzs_fe/countWsUsers'));
})

//获得红包列表数据
app.get('/index.php/Mobile/Weijson/getZuList', function(req, res){
	//获得红包列表数据
	console.log(req.params)
	var json = require('../ajaxJsons/qgzs_fe/getZuList');
	// json.data = json.data.slice(0,1);
	res.json(json);
})

//获得我发布的红包列表
app.get('/index.php/Mobile/Weijson/getZuListForWs', function(req, res){
	//获得红包列表数据
	var json = require('../ajaxJsons/qgzs_fe/getZuListForWs');
	res.json(json);
})
/*启动*/
app.listen('22222');
console.log('started on 22222')