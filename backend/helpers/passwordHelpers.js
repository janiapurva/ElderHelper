const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
   
  const hashPasswordFn = (password) => {
    //salt rounds: 10
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))

  }

  const comparePassword = (hashPassword, password) => {
    
    return bcrypt.compareSync(password, hashPassword);
  }

  const checkEmailExists = (email) => {


  }


  const generateToken = (id) => {

    const token = jwt.sign({
      userId: id
    },
      process.env.SECRET, { expiresIn: '7d' }
    );
    return token;
  }


  module.exports = {
    hashPasswordFn,
    comparePassword,
    checkEmailExists,
    generateToken
  };






