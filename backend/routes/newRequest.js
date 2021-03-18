const router = require("express").Router();
const dbHelper = require("../helpers/dbHelpers");
//const { addRequest } = require("../helpers/dbHelpers");

const { addRequest } = require("../helpers/dbHelpers")
// const { generateToken } = require("../helpers/passwordHelpers");

//
module.exports = ({ addRequest }) => {
  router.post("/", (req, res) => {
    //gets password
    console.log("INSIDE newReq.js Backend", req.body);

    if (!req.body.newRequestObj.task_description) {
      return res
        .status(400)
        .send({ message: "Error, need a request descritpion!" });
    }
    console.log("form ok");

    // //console.log("MY HASHED PW LINE 21", userhashPassword);

    // //destructure values from form field.
    // NOTE: posted_by(RequestBox.jsx - 38) and fullilled_by_volunter (RequestBox.jsx - 66) is hardcoded, needs to be updated by the current volunteer who picked up the request
    const {
      posted_by,
      date_of_request,
      task_description,
      task_postal_code,
      date_posted,
      fullilled_by_volunter,
      status,
    } = req.body.newRequestObj;

    // pass the values from form to addUser which inserts new user to DB
    addRequest(
      posted_by,
      date_of_request,
      task_description,
      task_postal_code,
      date_posted,
      fullilled_by_volunter,
      status
    )
      .then((users) => {
        console.log("register.js - checking response after newquest - users", users);
        console.log('succ request insert - IN newReq.JS')
        //sending users back to front entd....
        // console.log('register.js want user id', (users))
        
      })
      .catch((err) => {
        if (err) {
          return res
            .status(400)
            .send({ message: "ERROR" });
        }

        return res.status(400).send(err);
      });

    //
  });

  return router;
};
