const express = require("express");
const router = express.Router();
//gets pending requests to show when volunteers login
module.exports = ({ updateRequest }) => {
  /* post to update request after volunteer accept listing. */
  router.post("/", (req, res) => {
    console.log("hello - inside volunteer accept requests", req.body);

    const {
      requestID,
      posted_by,
      date_of_request,
      task_description,
      task_postal_code,
      date_posted,
      fullilled_by_volunter,
      status,
    } = req.body.updateRequestObjVolunteerAccept;

    updateRequest(
      requestID,
      posted_by,
      date_of_request,
      task_description,
      task_postal_code,
      date_posted,
      fullilled_by_volunter,
      status
    )
      .then((results) => {
        console.log(
          "volunteer requests - update status to accept .THEN",
          results
        );
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
