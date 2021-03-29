const express = require("express");
const router = express.Router();
//gets pending requests to show when volunteers login
module.exports = ({ getAcceptedAndCompletedRequestsForVolunteer }) => {
  /* GET users listing. */
  router.post("/", (req, res) => {
    const id = req.body.sessionID;
    getAcceptedAndCompletedRequestsForVolunteer(id)
      .then((results) => res.json(results))
      .catch((err) => res.json({ error: err.message }));
  });

  return router;
};
