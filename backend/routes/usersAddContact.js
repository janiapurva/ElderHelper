const router = require("express").Router();

module.exports = ({ addContactsForUser }) => {
  router.post("/", (req, res) => {
    //destructure values from form field.
    const {
      full_name,
      phone_number,
      email_address,
      elder_id,
    } = req.body.newContact;

    addContactsForUser(full_name, phone_number, email_address, elder_id)
      .then((resultsFromAddContact) => {return resultsFromAddContact})
      .catch((err) => {return err});
  });

  return router;
};
