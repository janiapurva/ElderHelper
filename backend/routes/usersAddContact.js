const router = require("express").Router();

module.exports = ({ addContactsForUser }) => {
  router.post("/", (req, res) => {
    //gets password
    console.log("usersAddContact.js", req.body.newContact);



    //destructure values from form field.
    const {
      full_name,
      phone_number,
      email_address,
      elder_id,
    } = req.body.newContact;

    addContactsForUser(full_name, phone_number, email_address, elder_id).then(
      (resultsFromAddContact) => {
        console.log("inside.then after", resultsFromAddContact);
      }
    );
  });

  return router;
};
