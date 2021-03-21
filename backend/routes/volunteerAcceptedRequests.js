const express = require("express");
const router = express.Router();
//gets pending requests to show when volunteers login
module.exports = ({ getAcceptedAndCompletedRequestsForVolunteer }) => {



  /* GET users listing. */
  router.post("/", (req, res) => {
    const id = req.body.sessionID
    // console.log('PLEASEEEE', req.body.sessionID)

    //console.log("hello - inside get volunteer requests");
    getAcceptedAndCompletedRequestsForVolunteer(id)
      .then((results) => {
        console.log("INSIDE .THEN after getting accepted reqests", results);
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
