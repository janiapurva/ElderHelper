const router = require("express").Router();
const axios = require("axios");
const dbHelper = require("../helpers/dbHelpers");
const { hashPasswordFn } = require("../helpers/passwordHelpers");
const { generateToken } = require("../helpers/passwordHelpers");

module.exports = ({ addVolunteerUser }) => {
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
      available,
      special_skills,
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
          addVolunteerUser(
            full_name,
            age,
            email_address,
            userhashPassword,
            phone_number,
            postal_code,
            lat,
            long,
            available,
            special_skills
          )
            .then((users) => {
              // console.log("register.js - checking response after registration - users", users);
              // console.log('IN REG.JS')
              // console.log('register.js want user id', (users))
              let token;

              try {
                token = generateToken(users.id);
                console.log("token checker", users);
                const full_name = users.full_name;

                const user_id = users.id;
                const user_lat = users.lat;
                const user_long = users.long;

                //  console.log('token - register.js', token)
                //console.log('REGISTER.js', res.send(token,full_name ));
                res.send({ token, full_name, user_id, user_lat, user_long });
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
        }
      });

    //pass the values from form to addUser which inserts new user to DB

    //
  });

  return router;
};
