const router = require("express").Router();
const { token } = require("morgan");
const {
  comparePassword,
  generateToken,
} = require("../helpers/passwordHelpers");

module.exports = ({ getVolunteerByEmail }) => {
  router.post("/", (req, res) => {
    if (!req.body.checkUser.email_address || !req.body.checkUser.password) {
      return res
        .status(400)
        .send({ message: "Either email or Password is missing!" });
    }

    const email_address = req.body.checkUser.email_address;

    getVolunteerByEmail(email_address)
      .then((users) => {
        let token;
        const userStoredPw = users[0].password;

        if (users.length === 0) {
          res.json({
            error: err.message,
          });
        } else {
          if (comparePassword(req.body.checkUser.password, userStoredPw)) {
            token = generateToken(users[0].id);

            const full_name = users[0].full_name;

            const user_id = users[0].id;

            const user_lat = users[0].lat;

            const user_long = users[0].long;

            res.send({ token, full_name, user_id, user_lat, user_long });
          }
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
