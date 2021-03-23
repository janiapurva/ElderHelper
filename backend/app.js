let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
const PORT = process.env.PORT || 8000;
let cors = require("cors");
const { Auth } = require("./db/middleware/Auth");

//get the routes

// let indexRouter = require('./routes/index');

//USER (i.e. elder i.e. person asking for help)
let usersRouter = require('./routes/users');
let usersLogin = require('./routes/login');
let newRequest = require('./routes/newRequest');
let usersRegister = require("./routes/register");
let userPastRequests = require("./routes/userPastRequests")
let usersRelatives = require("./routes/usersRelatives")
let usersAddContact = require("./routes/usersAddContact")

//Volunteer (i.e. person providing assistance)
let volunteerRegister = require("./routes/volunteerRegister");
let volunteerLogin = require("./routes/volunteerLogin");
let requests = require("./routes/requests")
let volunteerRequests = require("./routes/volunteerRequests")
let updateRequestVolunteerAccept = require("./routes/updateRequest")
let volunteerAcceptedRequests = require("./routes/volunteerAcceptedRequests")
const db = require('./db');

const dbHelpers = require("./helpers/dbHelpers")(db);

let app = express();
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
app.use('/userPastRequests', userPastRequests(dbHelpers), Auth.verifyToken);
app.use('/volunteerRequests', volunteerRequests(dbHelpers), Auth.verifyToken);
app.use('/updateRequest', updateRequestVolunteerAccept(dbHelpers), Auth.verifyToken);
app.use('/volunteerAcceptedRequests', volunteerAcceptedRequests(dbHelpers), Auth.verifyToken);

app.use('/usersRelatives', usersRelatives(dbHelpers), Auth.verifyToken);

app.use('/usersAddContact', usersAddContact(dbHelpers), Auth.verifyToken);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;
