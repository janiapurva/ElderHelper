const express = require("express");
const router = express.Router();
//gets pending requests to show when volunteers login
module.exports = ({ updateRequest }) => {
  /* post to update request after volunteer accept listing. */
  router.post("/", (req, res) => {
    //console.log("hello - inside volunteer accept requests", req.body);

    console.log('req.body.AAAA',req.body.updateRequestObjVolunteerAccept)

    const {
      fullilled_by_volunter,
      status,
      requestID
    } = req.body.updateRequestObjVolunteerAccept;

    

    updateRequest(
      fullilled_by_volunter,
      status,
      requestID
    )
      .then((results) => {
        console.log(
          "volunteer requests - update status to accept .THEN",
          results
        );
        //results contains re
        res.json(results);

        //THIS IS WHERE WE ARE AT
        //record has been updated in table with correct user and volunteer id

        //need another component to shows accepted/completed requests 

        



      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  return router;
};
