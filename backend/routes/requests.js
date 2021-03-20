const express = require('express');
const router = express.Router();

module.exports = ({getRequests}) => {
  /* GET users listing. */
  router.get('/', (req, res) => {
    //console.log('hello')  
    getRequests()
          .then((results) => {
            
            //console.log('users - 11', users)
            //results contains re
            res.json(results); 
            

          })
          .catch((err) => res.json({
              error: err.message
          }));
  });

  // router.get('/posts', (req, res) => {
  //     get()
  //         .then((usersPosts) => {
  //             const formattedPosts = getPostsByUsers(usersPosts);
  //             res.json(formattedPosts);
  //         })
  //         .catch((err) => res.json({
  //             error: err.message
  //         }));
  // });

  // router.post('/', (req, res) => {

  //     const {
  //         first_name,
  //         last_name,
  //         email,
  //         password
  //     } = req.body;

  //     getUserByEmail(email)
  //         .then(user => {

  //             if (user) {
  //                 res.json({
  //                     msg: 'Sorry, a user account with this email already exists'
  //                 });
  //             } else {
  //                 return addUser(first_name, last_name, email, password)
  //             }

  //         })
  //         .then(newUser => res.json(newUser))
  //         .catch(err => res.json({
  //             error: err.message
  //         }));

  // })

  return router;
};