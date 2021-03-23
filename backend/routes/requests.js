const express = require("express");
const router = express.Router();

module.exports = ({ getRequests }) => {
  /* GET users listing. */
  router.get("/", (req, res) => {
    //console.log('hello')
    getRequests()
      .then((results) => {
        //console.log('users - 11', users)
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
