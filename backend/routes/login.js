const router = require("express").Router();
const {comparePassword,generateToken} = require("../helpers/passwordHelpers");

module.exports = ({ getUserByEmail }) => {
  router.post("/", (req, res) => {
    if (!req.body.checkUser.email_address || !req.body.checkUser.password) {
      return res
        .status(400)
        .send({ message: "Either email or Password is missing!" });
    }
    const email_address = req.body.checkUser.email_address;

    //pass the values from form to addUser which inserts new user to DB
    getUserByEmail(email_address)
      .then((users) => {
        const userStoredPw = users.password;

        let token;
        if (comparePassword(req.body.checkUser.password, userStoredPw)) {
          token = generateToken(users.id);
          const full_name = users.full_name;
          const user_id = users.id;
          res.send({ token, full_name, user_id });
        } else {
          console.log("probably error");
          res.json({
            error: err.message,
          });
        }
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
