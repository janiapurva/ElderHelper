const express = require("express");
const router = express.Router();

module.exports = ({ getUserPastRequests }) => {
  /* GET users listing. */
  router.post("/", (req, res) => {
    // console.log('hi - inside userPastReq.js line 7 - here is REQ.SESSIONID',req.body.sessionID)
    // //need to pass user_id back for query

    getUserPastRequests(req.body.sessionID)
      .then((results) => {
        console.log('userPastReqs.js - LINE11', results)
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
