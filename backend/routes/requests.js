const express = require("express");
const router = express.Router();

module.exports = ({ getCountRequests }) => {
  /* GET users listing. */
  router.post("/", (req, res) => {
    // console.log('hello in requests.js',req.body.sessionID)
    const sessionID = req.body.sessionID
    getCountRequests(sessionID)
      .then((results) => {
        console.log('requests - want count of requests back', results[0].count)
        
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
