var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const PORT       = process.env.PORT || 8000;
var cors = require('cors')
const { Auth } = require('./db/middleware/Auth');


//get the routes

var indexRouter = require('./routes/index');

//get routes in this file 
var usersRouter = require('./routes/users');

//get routes in this file 
var usersLogin = require('./routes/login');

var usersLoginTest = require('./routes/test');


//get routes in this file 
var usersRegister = require('./routes/register');

const db = require('./db');

const dbHelpers = require('./helpers/dbHelpers')(db);

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//here - not sure:
//usersRouter contains all routes for users, and we pass dbHelpers to it because we call the queries when we hit routes.
// i.e. when we hit /, getUsers() is called and this is getUsers     const getUsers = () => {
    //   const query = {
    //     text: 'SELECT * FROM users_elders',
    // };


app.use('/api/users', usersRouter(dbHelpers), Auth.verifyToken);
app.use('/register', usersRegister(dbHelpers), Auth.verifyToken);
app.use('/login', usersLogin(dbHelpers), Auth.verifyToken);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;
