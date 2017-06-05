var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var User = require("../db/UserUtils.js")

var ejs = require('ejs');


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');



// 设置views路径和模板
app.set('views', './client/view');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);


// 新增接口路由
// app.get('/data/:module', function (req, res, next) {
//     var c_path = req.params.module;
//     var Action = require('./server/action/data/' + c_path);
//     Action.execute(req, res);
// });



// 解决跨域
app.all('*', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "text/html");
    next();

})

// 对所有(/)URL或路由返回index.html 
app.post('/ajax/test', function (req, res, next) {
    console.log("start...............")
    // get 方式获取参数 req.query
    // console.log(req.query)

    // post 方式获取参数 req.body
    console.log(req.body)

    console.log("end..................")
    res.json({ status: 200, msg: 'success' });
});

app.post('/user/insert', function (req, res, next) {
    console.log(req.body)
    var userDao = new User();
    userDao.insert(req.body);
    res.json({ status: 200, msg: 'insert success' });
});

app.post('/user/delete', function (req, res, next) {
    console.log(req.body)
    var userDao = new User();
    userDao.del(req.body);
    res.json({ status: 200, msg: 'delete success' });
});

app.post('/user/update', function (req, res, next) {
    var userDao = new User();
    userDao.update();
    res.json({ status: 200, msg: 'update success' });
})

app.post('/user/findByIdAndUpdate', function (req, res, next) {
    var userDao = new User();
    userDao.findByIdAndUpdate().then(function (data) {
        res.json(data);
    })
})

app.post('/user/getByConditions', function (req, res, next) {
    var userDao = new User();
    userDao.getByConditions().then(function (data) {
        console.log("---------------")
        console.log("result", data)
        console.log("---------------")
        res.json(data);
    })
})

// 文件上传
app.post('/user/uploadFile', function (req, res, next) {
    console.log("..........file_upload..............");
    console.log(req.files[0]);  // 上传的文件信息
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
})

app.get('/data/file', function (req, res, next) {
     console.log("..........file_upload.......22222.......");
    Action.execute(req, res);
});


var _ = require('lodash');
// Mock配置
var mockConfigWrap = require('./mockConfig.js');

var mockConfig = mockConfigWrap.mockConfig;

for (var i = 0; i < mockConfig.length; i++) {
    var url = mockConfig[i].url;

    var position = mockConfig[i].position;

    var resData = mockConfig[i].response[position]

    if (mockConfig[i].type == 'post') {

        app.post(url, function (req, res, next) {
            var data = _.find(mockConfig, function (o) { return o.url == req.route.path; })
            var position = data.position;
            res.json(data.response[position]);
        })

    } else if (mockConfig[i].type == 'get') {
        console.log(mockConfig[i])
        app.get(url, function (req, res, next) {
            // var userDao = new User();
            // userDao.insert();

            var data = _.find(mockConfig, function (o) { return o.url == req.route.path; })
            var position = data.position;
            res.json(data.response[position]);
        })

    }
}


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, function (err) {

    if (err) {
        return console.error(err);
    }

    console.log('Listening at http://localhost:3000/, waiting for compile');

});

// module.exports = app;
