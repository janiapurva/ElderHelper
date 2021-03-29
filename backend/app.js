//express
let express = require("express");
let app = express();

let path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cookie parser
let cookieParser = require("cookie-parser");
app.use(cookieParser());

//http logger
let logger = require("morgan");
app.use(logger("dev"));
const PORT = process.env.PORT || 8000;

//cors
let cors = require("cors");
app.use(cors());
const { Auth } = require("./db/middleware/Auth");

//USER routes require (i.e. elder i.e. person asking for help)
let usersRouter = require("./routes/users");
let usersLogin = require("./routes/login");
let newRequest = require("./routes/newRequest");
let usersRegister = require("./routes/register");
let userPastRequests = require("./routes/userPastRequests");
let usersRelatives = require("./routes/usersRelatives");
let usersAddContact = require("./routes/usersAddContact");

//Volunteer routes require (i.e. person providing assistance)
let volunteerRegister = require("./routes/volunteerRegister");
let volunteerLogin = require("./routes/volunteerLogin");
let requests = require("./routes/requests");
let volunteerRequests = require("./routes/volunteerRequests");
let updateRequestVolunteerAccept = require("./routes/updateRequest");
let volunteerAcceptedRequests = require("./routes/volunteerAcceptedRequests");

//db conn + helpers
const db = require("./db");
const dbHelpers = require("./helpers/dbHelpers")(db);

//use routes
app.use("/api/users", usersRouter(dbHelpers), Auth.verifyToken);
app.use("/register", usersRegister(dbHelpers), Auth.verifyToken);
app.use("/login", usersLogin(dbHelpers), Auth.verifyToken);
app.use("/newRequest", newRequest(dbHelpers), Auth.verifyToken);
app.use("/volunteerRegister", volunteerRegister(dbHelpers), Auth.verifyToken);
app.use("/volunteerLogin", volunteerLogin(dbHelpers), Auth.verifyToken);
app.use("/requests", requests(dbHelpers), Auth.verifyToken);
app.use("/userPastRequests", userPastRequests(dbHelpers), Auth.verifyToken);
app.use("/volunteerRequests", volunteerRequests(dbHelpers), Auth.verifyToken);
app.use("/updateRequest", updateRequestVolunteerAccept(dbHelpers), Auth.verifyToken);
app.use("/volunteerAcceptedRequests", volunteerAcceptedRequests(dbHelpers), Auth.verifyToken);
app.use("/usersRelatives", usersRelatives(dbHelpers), Auth.verifyToken);
app.use("/usersAddContact", usersAddContact(dbHelpers), Auth.verifyToken);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;
