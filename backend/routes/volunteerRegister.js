const router = require("express").Router();
const dbHelper = require("../helpers/dbHelpers");
const { hashPasswordFn } = require("../helpers/passwordHelpers");
const { generateToken } = require("../helpers/passwordHelpers");
const axios = require("axios");

module.exports = ({ addVolunteerUser }) => {
  router.post("/", (req, res) => {
    if (!req.body.newUser.email_address || !req.body.newUser.password) {
      return res
        .status(400)
        .send({ message: "Either email or Password is missing!" });
    }
    const userhashPassword = hashPasswordFn(req.body.newUser.password);

    const {
      full_name,
      age,
      email_address,
      phone_number,
      postal_code,
      street_address,
      special_skills,
    } = req.body.newUser;
    axios
      .get(
        `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&Postal=${postal_code}`
      )
      .then((res2) => {
        let location = res2.data.candidates[0];

        if (location) {
          const { x: long, y: lat } = location.location;
          addVolunteerUser(
            full_name,
            age,
            email_address,
            userhashPassword,
            phone_number,
            postal_code,
            lat,
            long,
            street_address,
            special_skills
          )
            .then((users) => {
              let token;

              try {
                token = generateToken(users.id);

                const full_name = users.full_name;
                const user_id = users.id;
                const user_lat = users.lat;
                const user_long = users.long;

                res.send({ token, full_name, user_id, user_lat, user_long });
              } catch (err) {
                console.log(err);
              }
            })
            .catch((err) =>
              res.json({
                error: err.message,
              })
            );
        }
      });
  });

  return router;
};
