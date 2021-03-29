const express = require("express");
const router = express.Router();
//gets pending requests to show when volunteers login
module.exports = ({ getPendingRequests }) => {
  router.get("/", (req, res) => {
    getPendingRequests()
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
