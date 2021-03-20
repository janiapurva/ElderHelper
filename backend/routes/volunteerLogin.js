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
    const email_address = req.body.checkUser.email_address;
    console.log(email_address)


    //pass the values from form to addUser which inserts new user to DB
    getVolunteerByEmail(email_address)
      .then((users) => {
        //users pw from db
        const userStoredPw = users.password;
        //need to now compare values from user entered pw with
        console.log('hi 123245678978998797')

        let token;
        
        if (comparePassword(req.body.checkUser.password, userStoredPw)) {
          console.log('hi in succ password compare')
          token = generateToken(users.id );

          const full_name = users.full_name;

          const user_id = users.id;
          console.log('45 user_id', user_id)
          
          //  console.log('token - register.js', token)
          console.log('VOLLOGIN.js - LINE48', (token,full_name, user_id ));
          res.send({token, full_name, user_id });



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
