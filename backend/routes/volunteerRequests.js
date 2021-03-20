const express = require("express");
const router = express.Router();

module.exports = ({ getRequests }) => {
  /* GET users listing. */
  router.get("/", (req, res) => {
    console.log("hello - inside get volunteer requests");
    getRequests()
      .then((results) => {
        console.log("volunteer requests - users - 11", results);
        //results contains re
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
