const router = require("express").Router();
const dbHelper = require('../helpers/dbHelpers');
const {hashPasswordFn} = require('../helpers/passwordHelpers');


module.exports =  ({
  addUser
}) => {
  
  router.post('/', (req, res) => {
    //gets password
    //console.log(req.body.newUser.password)


    if (!req.body.newUser.email_address || !req.body.newUser.password) {
      return res.status(400).send({'message': 'Either email or Password is missing!'});
    }
    console.log('PWHELPER')
    const userhashPassword = hashPasswordFn(req.body.newUser.password);

    console.log('MY HASHED PW LINE 21', userhashPassword)

        //destructure values from form field. 
        const {
          full_name,
          age, 
          email_address, 
                    
          phone_number,
          postal_code, 
          belongs_to
        }
        = req.body.newUser

        // console.log(full_name,
        //   age, 
        //   email_address, 
        //   userhashPassword,          
        //   phone_number,
        //   postal_code, 
        //   belongs_to)
    

    //pass the values from form to addUser which inserts new user to DB
    addUser(full_name,
      age, 
      email_address,
      userhashPassword, 
      phone_number,
      postal_code, 
      belongs_to)
    .then((users) => {
      console.log('register.js - checking response after registration - users', users )
      // const token = Helper.generateToken(rows[0].id);
      // return res.status(201).send({ token });

  //     "id" SERIAL PRIMARY KEY,
  // "full_name" varchar,
  // "age" int,
  // "email_address" varchar UNIQUE,
  // "password" varchar,
  // "phone_number" varchar,
  // "postal_code" varchar,
  // "belongs_to" varchar,
      
      
      res.redirect('/')})
    .catch((err) => res.json({
        error: err.message
    }));

    //
    

  });

  
  return router;

  

};
