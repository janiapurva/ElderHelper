const router = require("express").Router();
const {addUser} = require('../helpers/dbHelpers');

module.exports = ({
  getUsers,
  getUserByEmail,
  addUser,
  getUsersPosts
}) => {
  
  router.post('/', (req, res) => {
    //destructure values from form field. 
    const {
      full_name,
      age, 
      email_address,
      password, 
      phone_number,
      postal_code, 
      belongs_to
    }
    = req.body.newUser

    //pass the values from form to addUser which inserts new user to DB
    addUser(full_name,
      age, 
      email_address,
      password, 
      phone_number,
      postal_code, 
      belongs_to)
    .then((users) => res.redirect('/'))
    .catch((err) => res.json({
        error: err.message
    }));

    //
    

  });

  
  return router;

  

};
