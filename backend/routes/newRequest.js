const router = require("express").Router();
const dbHelper = require("../helpers/dbHelpers");
//const { addRequest } = require("../helpers/dbHelpers");
const axios = require("axios");

const { addRequest } = require("../helpers/dbHelpers");
// const { generateToken } = require("../helpers/passwordHelpers");

//
module.exports = ({ addRequest }) => {
  router.post("/", (req, res) => {
    //gets password
    console.log("INSIDE newReq.js Backend", req.body);

    if (!req.body.newRequestObj.task_description) {
      return res
        .status(400)
        .send({ message: "Error, need a request descritpion!" });
    }

    // //destructure values from form field.
    // NOTE: posted_by(RequestBox.jsx - 38) and fullilled_by_volunter (RequestBox.jsx - 66) is hardcoded, needs to be updated by the current volunteer who picked up the request
    const {
      posted_by,
      date_of_request,
      task_description,
      task_postal_code,
      date_posted,
      fullilled_by_volunter,
      status,
    } = req.body.newRequestObj;
    axios
      .get(
        `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&Postal=${task_postal_code}`
      )
      .then((res2) => {
        console.log(res2);
        console.log("argiscall", res2.data.candidates[0].location);
        let location = res2.data.candidates[0];
        if (location) {
          const { x: long, y: lat } = location.location;
          addRequest(
            posted_by,
            date_of_request,
            task_description,
            task_postal_code,
            lat,
            long,
            date_posted,
            fullilled_by_volunter,
            status
          )
            .then((users) => {
              res.send(users);
            })
            .catch((err) => {
              if (err) {
                return res
                  .status(400)
                  .send({ message: "ERROR - newRequestJS - LINE 58" });
              }

              return res.status(400).send(err);
            });
        }
      });

    // // pass the values from form to addUser which inserts new user to DB
    // addRequest(
    //   posted_by,
    //   date_of_request,
    //   task_description,
    //   task_postal_code,
    //   date_posted,
    //   fullilled_by_volunter,
    //   status
    // )
    //   .then((users) => {
    //     res.send(users);
    //   })
    //   .catch((err) => {
    //     if (err) {
    //       return res.status(400).send({ message: "ERROR" });
    //     }

    //     return res.status(400).send(err);
    //   });
  });
  return router;
};
