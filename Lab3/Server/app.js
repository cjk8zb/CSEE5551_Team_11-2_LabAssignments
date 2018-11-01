var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Your added functions
var url = 'mongodb://root:password1@ds147233.mlab.com:47233/lab3';
app.get('/register', function(req, res){
    MongoClient.connect(url, function(err, db){
        if(err){
            console.log("error connecting")
        }
        console.log("connected successfully")
    });
});
app.get('/chatroom', function(req, res){
    MongoClient.connect(url, function(err, db){
        if(err){
            console.log("error connecting")
        }
        console.log("connected successfully")
    });
});
app.post('/chatroom', function(req, res){
    MongoClient.connect(url, function(err,db){
        if(err){
            console.log("error connecting")
        }
        console.log("connected successfully")
    });
});
app.put('/chatroom', function(req, res){
    MongoClient.connect(url, function(err,db){
        if(err){
            console.log("error connecting")
        }
        console.log("connected successfully")
    });
});

var createCollection = function(db,data,callback){
    db.createCollection(data);
    callback();
}

var createUser = function(db,data,callback){
    db.createUser({
        "user": data.user,
        "pwd": data.pwd,
        "roles": []
    },
        function(err, result){
            assert.equal(err, null);

        })
}

var server = app.listen(8081,function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http://%s:%s", host, port)});

//End of added function

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
