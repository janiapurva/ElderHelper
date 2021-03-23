const express = require("express");
const router = express.Router();

//using this for leaflet api call to show where users(elders) are  on volutneer home.
module.exports = ({ getUsersRelatives }) => {
  /* GET users listing. */

  //need User ID to pass to getUsersRelaives

  router.post("/", (req, res) => {

    const sessionID = req.body.sessionID
    console.log(sessionID,'sessionID')

    getUsersRelatives(sessionID)
      .then((users) => {
        
        console.log('inside/then after succ query getUsersRelatives; users',users)
        
        res.json(users)})
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
