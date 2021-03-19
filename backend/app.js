var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const PORT = process.env.PORT || 8000;
var cors = require("cors");
const { Auth } = require("./db/middleware/Auth");

//get the routes

// var indexRouter = require('./routes/index');

//get routes in this file 
var usersRouter = require('./routes/users');

//get routes in this file 
var usersLogin = require('./routes/login');

//get routes in this file 
var usersRegister = require('./routes/register');

// routes to make  new request
var newRequest = require('./routes/newRequest');
var usersRegister = require("./routes/register");
var volunteerRegister = require("./routes/volunteerRegister");
var volunteerLogin = require("./routes/volunteerLogin");
var requests = require("./routes/requests")
const db = require('./db');

const dbHelpers = require("./helpers/dbHelpers")(db);

var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/api/users', usersRouter(dbHelpers), Auth.verifyToken);
app.use('/register', usersRegister(dbHelpers), Auth.verifyToken);
app.use('/login', usersLogin(dbHelpers), Auth.verifyToken);
app.use('/newRequest', newRequest(dbHelpers), Auth.verifyToken);
app.use('/volunteerRegister', volunteerRegister(dbHelpers), Auth.verifyToken);
app.use('/volunteerLogin', volunteerLogin(dbHelpers), Auth.verifyToken);
app.use('/requests', requests(dbHelpers), Auth.verifyToken);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;
