const router = require("express").Router();
const axios = require("axios");
const { hashPasswordFn } = require("../helpers/passwordHelpers");
const { generateToken } = require("../helpers/passwordHelpers");

module.exports = ({ addUser }) => {
  router.post("/", (req, res) => {
    if (!req.body.newUser.email_address || !req.body.newUser.password) {
      return res
        .status(400)
        .send({ message: "Either email or Password is missing!" });
    }

    const userhashPassword = hashPasswordFn(req.body.newUser.password);

    //destructure values from form field.
    const {
      full_name,
      age,
      email_address,
      phone_number,
      postal_code,
      street_address,
    } = req.body.newUser;

    axios
      .get(
        `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&Postal=${postal_code}`
      )
      .then((res2) => {
        console.log(res2);
        console.log("acrgiscall", res2.data.candidates[0].location);
        let location = res2.data.candidates[0];
        if (location) {
          const { x: long, y: lat } = location.location;

          addUser(
            full_name,
            age,
            email_address,
            userhashPassword,
            phone_number,
            postal_code,
            lat,
            long,
            street_address
          )
            .then((users) => {
              if (users.error) {
                console.log("error ON REGISTER");
              } else {

                let token;

                try {
                  token = generateToken(users.id);

                  const full_name = users.full_name;

                  const user_id = users.id;

                  res.send({ token, full_name, user_id });
                } catch (err) {
                  console.log(err);
                }
              }
            })
            .catch((err) =>
              res.json({
                error: err.message,
              })
            );
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: err.message,
        });
      });
  });

  return router;
};
