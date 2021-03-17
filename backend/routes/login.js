const router = require("express").Router();
const { token } = require("morgan");


module.exports = ({
  
  getUserByEmailandPassWord

}) => {
  
  router.post('/', (req, res) => {
    console.log('isnide login post req', req.body)

    if (!req.body.email_address || !req.body.password) {
      return res.status(400).send({'message': 'Either email or Password is missing!'});
    }

    const hashPassword = Helper.hashPassword(req.body.password);


    //destructure values from form field. 
    const {
      email_address,
      password, 
    }
    = req.body.checkUser

    //pass the values from form to addUser which inserts new user to DB
    getUserByEmailandPassWord( 
      email_address,
      hashPassword)
    .then((users) => res.send({token:'test123'}))
    .catch((err) => res.json({
        error: err.message
    }));

    //
    

  });

  
  return router;

  

};
