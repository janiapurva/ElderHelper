const express = require("express");
const router = express.Router();

//using this for leaflet api call to show where users(elders) are  on volutneer home.
module.exports = ({ getUsersRelatives }) => {
  /* GET users listing. */

  router.post("/", (req, res) => {
    const sessionID = req.body.sessionID;

    getUsersRelatives(sessionID)
      .then((users) => res.json(users))
      .catch((err) => res.json({ error: err.message }));
  });

  return router;
};
