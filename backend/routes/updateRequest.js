const express = require("express");
const router = express.Router();
//gets pending requests to show when volunteers login
module.exports = ({ updateRequest }) => {
  /* post to update request after volunteer accept listing. */
  router.post("/", (req, res) => {
    const {
      fullilled_by_volunter,
      status,
      requestID,
    } = req.body.updateRequestObjVolunteerAccept;

    updateRequest(fullilled_by_volunter, status, requestID)
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
