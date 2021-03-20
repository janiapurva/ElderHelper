const router = require("express").Router();
const { token } = require("morgan");
const {
  comparePassword,
  generateToken,
  hashPasswordFn
} = require("../helpers/passwordHelpers");

module.exports = ({ getUserByEmail }) => {
  
  router.post("/", (req, res) => {
    // console.log('isnide login post req', req.body)

    if (!req.body.checkUser.email_address || !req.body.checkUser.password) {
      return res
        .status(400)
        .send({ message: "Either email or Password is missing!" });
    }

    //const hashPassword = hashPasswordFn(req.body.checkUser.password);
    //console.log('HASH', hashPassword)

    // want to compare

    //destructure values from form field.
    const email_address  = req.body.checkUser.email_address;
    console.log('HASH', email_address)//works, user entered email

    //pass the values from form to addUser which inserts new user to DB
    getUserByEmail(email_address)
      .then((users) => {
        //users pw from db
        console.log('insdie .then getUserByEmail')
        
        const userStoredPw = users.password; // NOT WORKING!!!!!!!
        //need to now compare values from user entered pw with
        console.log('hi', req.body.checkUser.password, userStoredPw, email_address)

        let token;
        if (comparePassword(req.body.checkUser.password, userStoredPw)) {
          console.log('hi in succ password compare')
          token = generateToken(users.id );

          const full_name = users.full_name;

          const user_id = users.id;

          
          //  console.log('token - register.js', token)
          //console.log('REGISTER.js', res.send(token,full_name ));
          res.send({token, full_name, user_id });



        }
         else {
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
