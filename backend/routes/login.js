const router = require("express").Router();
const { token } = require("morgan");
const {
  comparePassword,
  generateToken,
} = require("../helpers/passwordHelpers");

module.exports = ({ getUserByEmail }) => {
  
  router.post("/", (req, res) => {
    // console.log('isnide login post req', req.body)

    if (!req.body.checkUser.email_address || !req.body.checkUser.password) {
      return res
        .status(400)
        .send({ message: "Either email or Password is missing!" });
    }

    // const hashPassword = hashPasswordFn(req.body.checkUser.password);
    // console.log('HASH', hashPassword)

    // want to compare

    //destructure values from form field.
    const { email_address } = req.body.checkUser;

    //pass the values from form to addUser which inserts new user to DB
    getUserByEmail(email_address)
      .then((users) => {
        //users pw from db
        const userStoredPw = users.password;
        //need to now compare values from user entered pw with
        //console.log('hi')

        let token;
        if (comparePassword(req.body.checkUser.password, userStoredPw)) {

          console.log('hi - compariosson is succesful')
          //passwords match
          //console.log("passwords match");
          token = generateToken(users.id, users.full_name);
           console.log('token - login.js', token)
          res.send(token);
        } else {
          console.log("probably error");
        }
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );

    //
  });

  return router;
};
