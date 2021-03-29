const express = require("express");
const router = express.Router();

module.exports = ({ getCountRequests }) => {
  router.post("/", (req, res) => {
    const sessionID = req.body.sessionID;
    getCountRequests(sessionID)
      .then((results) => {
        res.json(results);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
