const router = require("express").Router();

const {getUserByEmailandPassWord} = require('../helpers/dbHelpers');

module.exports = (db) => {
  
  // router.POST('/login', (req, res) => {
  //   console.log('req.body', req.body)
  //   // const email = req.body.email
  //   // const password = req.body.password

  //   // db.query(
  //   //   (getUserByEmailandPassWord(),[email,password])      
  //   //   ).then( ({res}) => {
  //   //     res.json()

  //   //     if (!res.rows[0]) {
  //   //       console.log(`there is no user with ${email}`);
  //   //       return null;
  //   //     } else {
  //   //       console.log(res.rows[0]);
  //   //       return res.rows[0];
  //   //     }

  
  //   // });
  // });

  
  return router;

};
