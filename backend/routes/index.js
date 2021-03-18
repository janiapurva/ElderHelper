// var express = require('express');
// const dbHelpers = require('../helpers/dbHelpers');
// var router = express.Router();


// const app = require("./login");

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = (db) => {
  
//   router.POST("/login", (req, res) => {
//     db.query(
//       getUserByEmailandPassWord()      
//       ).then( ({res}) => {
//         res.json()

//         if (!res.rows[0]) {
//           console.log(`there is no user with ${email}`);
//           return null;
//         } else {
//           console.log(res.rows[0]);
//           return res.rows[0];
//         }

  
//     });
//   });

  
//   return router;

// };




// module.exports = router;
