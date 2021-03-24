const router = require("express").Router();
const axios = require("axios");

const { hashPasswordFn } = require("../helpers/passwordHelpers");
const { generateToken } = require("../helpers/passwordHelpers");

module.exports = ({ addUser }) => {
  router.post("/", (req, res) => {
    //gets password
    console.log("REGISTER.js", req.body.newUser.password);

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
              // console.log(
              //   "register.js - checking response after registration - users",
              //   users.error.name
              // );
              // console.log('IN REG.JS')
              // console.log('register.js want user id', (users))

              if (users.error) {
                console.log("error ON REGISTER");
              } else {
                let token;

                try {
                  token = generateToken(users.id);

                  const full_name = users.full_name;

                  const user_id = users.id;

                  //  console.log('token - register.js', token)
                  //console.log('REGISTER.js', res.send(token,full_name ));
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

    // //pass the values from form to addUser which inserts new user to DB
    // addUser(
    //   full_name,
    //   age,
    //   email_address,
    //   userhashPassword,
    //   phone_number,
    //   postal_code,
    //   belongs_to
    // )
    //   .then((users) => {
    //     // console.log("register.js - checking response after registration - users", users);
    //     // console.log('IN REG.JS')
    //     // console.log('register.js want user id', (users))
    //     let token;

    //     try {
    //       token = generateToken(users.id );

    //       const full_name = users.full_name;

    //       const user_id = users.id;

    //       //  console.log('token - register.js', token)
    //       //console.log('REGISTER.js', res.send(token,full_name ));
    //       res.send({token, full_name, user_id });

    //     } catch (err) {
    //       console.log(err);
    //     }
    //   })
    //   .catch((err) => {
    //     if (err.routine === "_bt_check_unique") {
    //       return res
    //         .status(400)
    //         .send({ message: "User with that EMAIL already exist" });
    //     }

    //     return res.status(400).send(err);
    //   });

    // //
  });

  return router;
};
