import * as MongoClient from "mongodb";

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
app.get('/chatroom', function(req, res){
    MongoClient.connect(url, function(err, db){
        if(err){
            console.log("error connecting")
        }
        getTopics(db, req.body, function(){

        });
        console.log("connected successfully")
    });
});
app.post('/chatroom', function(req, res){
    MongoClient.connect(url, function(err,db){
        if(err){
            console.log("error creating topic")
        }
        createTopic(db, req.body, function(){

        });
        console.log("Topic created")
    });
});
app.delete('/chatroom', function(req, res){
    MongoClient.connect(url, function(err,db){
        if(err){
            console.log("error deleting topic")
        }
        deleteTopic(db, req.body, function(){

        });
        console.log("Topic deleted")

    });
});

var createTopic = function(db,data,callback){
    db.createCollection(data.topic);
    console.log("creating Topic");
    callback();
};

var deleteTopic = function(db,data,callback){
    console.log("dropping Topic");
    db.data.drop();
    callback();
};

var getTopics = function(db, data, callback){
    console.log("retrieving Topic");
    db.collection.find({});
    callback();
};
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
