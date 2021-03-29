const router = require("express").Router();
const axios = require("axios");

module.exports = ({ addRequest }) => {
  router.post("/", (req, res) => {
    if (!req.body.newRequestObj.task_description) {
      return res
        .status(400)
        .send({ message: "Error, need a request descritpion!" });
    }

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
                  .send({ message: "ERROR - newRequestJS - LINE 47" });
              }

              return res.status(400).send(err);
            });
        }
      });
  });
  return router;
};
