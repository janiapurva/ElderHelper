const express = require("express");
const router = express.Router();

//using this for leaflet api call to show where users(elders) are  on volutneer home.
module.exports = ({ getUsers }) => {
  /* GET users listing. */
  router.get("/", (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
