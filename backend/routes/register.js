const router = require("express").Router();
const dbHelper = require("../helpers/dbHelpers");
const { hashPasswordFn } = require("../helpers/passwordHelpers");
const { generateToken } = require("../helpers/passwordHelpers");

module.exports = ({ addUser }) => {
  router.post("/", (req, res) => {
    //gets password
    //console.log(req.body.newUser.password)

    if (!req.body.newUser.email_address || !req.body.newUser.password) {
      return res
        .status(400)
        .send({ message: "Either email or Password is missing!" });
    }
    //console.log("PWHELPER");
    const userhashPassword = hashPasswordFn(req.body.newUser.password);

    //console.log("MY HASHED PW LINE 21", userhashPassword);

    //destructure values from form field.
    const {
      full_name,
      age,
      email_address,
      phone_number,
      postal_code,
      belongs_to,
    } = req.body.newUser;

    //pass the values from form to addUser which inserts new user to DB
    addUser(
      full_name,
      age,
      email_address,
      userhashPassword,
      phone_number,
      postal_code,
      belongs_to
    )
      .then((users) => {
        // console.log("register.js - checking response after registration - users", users);
        // console.log('IN REG.JS')
        // console.log('register.js want user id', (users))
        let token;

        try {
          token = generateToken(users.id, users.full_name);
          //  console.log('token - register.js', token)
          res.send(token);
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        if (err.routine === "_bt_check_unique") {
          return res
            .status(400)
            .send({ message: "User with that EMAIL already exist" });
        }

        return res.status(400).send(err);
      });

    //
  });

  return router;
};
