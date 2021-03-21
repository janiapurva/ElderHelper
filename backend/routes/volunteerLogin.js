const router = require("express").Router();
const { token } = require("morgan");
const {
  comparePassword,
  generateToken,
} = require("../helpers/passwordHelpers");

module.exports = ({ getVolunteerByEmail }) => {
  
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
    getVolunteerByEmail(email_address)
      .then((users) => {
        //users pw from db
        const userStoredPw = users.password;
        //need to now compare values from user entered pw with
        //console.log('hi')

        let token;
        if (comparePassword(req.body.checkUser.password, userStoredPw)) {

          token = generateToken(users.id );

          const full_name = users.full_name;

          const user_id = users.id;
          const user_lat= users.lat
          const user_long= users.long

          console.log('users volunteer long46', users)
          //  console.log('token - register.js', token)
          //console.log('REGISTER.js', res.send(token,full_name ));
          res.send({token, full_name, user_id, user_lat, user_long});
          console.log('line50 volunteerlogin',users)



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
