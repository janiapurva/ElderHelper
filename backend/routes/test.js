const router = require("express").Router();
const {getUserByEmailandPassWord} = require('../helpers/dbHelpers');

module.exports = ({
  
  getUserByEmailandPassWord

}) => {
  
  router.post('/', (req, res) => {
    console.log('isnide login post req', req.body.checkUser)
    //destructure values from form field. 
    const {
      email_address,
      password, 
    }
    = req.body.checkUser

    //pass the values from form to addUser which inserts new user to DB
    getUserByEmailandPassWord( 
      email_address,
      password)
    .then((users) => res.send('HEllo lo'))
    .catch((err) => res.json({
        error: err.message
    }));

    //
    

  });

  
  return router;

  

};
