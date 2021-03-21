module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: "SELECT * FROM users_elders",
    };

    return db
      .query(query)
      .then((result) => {
        // console.log(result.rows);
        return result.rows;
      })
      .catch((err) => err);
  };

  const getVolunteersUsers = () => {
    const query = {
      text: "SELECT * FROM users_volunteers",
    };

    return db
      .query(query)
      .then((result) => {
        // console.log(result.rows);
        return result.rows;
      })
      .catch((err) => err);
  };

  const getRequests = () => {
    const query = {
      text: "SELECT * FROM requests;",
    };
    return db
      .query(query)
      .then((result) => {
        // console.log("result from query dbhelpers", result);
        return result.rows;
      })
      .catch((err) => console.log("line 33 dbhelpers", err));
  };

  const addUser = (
    fullName,
    age,
    email,
    password,
    phoneNumber,
    postalCode,
    lat,
    long,
    afiliations
  ) => {
    //console.log(`adding user`)
    const query = {
      text: `INSERT INTO users_elders (full_name, age, email_address, password, phone_number, postal_code, lat, long, belongs_to) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      values: [
        fullName,
        age,
        email,
        password,
        phoneNumber,
        postalCode,
        lat,
        long,
        afiliations,
      ],
    };

    return db
      .query(query)
      .then((result) => {
        // console.log('id',result.rows[0].id)
        // console.log(`isnide success ful promist from query res from add user / want to return userID for the token: ${result.rows[0].id}`)
        return result.rows[0];
      })
      .catch((err) => {
        console.log(`err on adduser: ${err}`);
        return err;
      });
  };

  const getUserByEmail = (email_address, password) => {
    const query = {
      text: `SELECT * FROM users_elders WHERE email_address LIKE $1;`,
      values: [email_address],
    };
    return db
      .query(query)
      .then((result) => {
        // console.log('id',result.rows[0].id)
        // console.log(`isnide success ful promist from query res from add user / want to return userID for the token: ${result.rows[0].id}`)
        return result.rows[0];
      })
      .catch((err) => {
        console.log(`err on adduser: ${err}`);
        return err;
      });
  };
  const getVolunteerByEmail = (email_address, password) => {
    const query = {
      text: `SELECT * FROM users_volunteers WHERE email_address LIKE $1;`,
      values: [email_address],
    };
    return db
      .query(query)
      .then((result) => {
        // console.log('id',result.rows[0].id)
        // console.log(`isnide success ful promist from query res from add user / want to return userID for the token: ${result.rows[0].id}`)
        return result.rows[0];
      })
      .catch((err) => {
        console.log(`err on adduser: ${err}`);
        return err;
      });
  };

  const addRequest = (
    posted_by,
    date_of_request,
    task_description,
    task_postal_code,
    lat,
    long,
    date_posted,
    fullilled_by_volunter,
    status
  ) => {
    //console.log(`adding user`)
    const query = {
      text: `INSERT INTO requests (posted_by, date_of_request, task_description, task_postal_code, lat, long, date_posted, fullilled_by_volunter, status) VALUES ($1, $2, $3, $4, $5,$6,$7,$8,$9) RETURNING *`,
      values: [
        posted_by,
        date_of_request,
        task_description,
        task_postal_code,
        lat,
        long,
        date_posted,
        fullilled_by_volunter,
        status,
      ],
    };

    return db
      .query(query)
      .then((result) => {
        // console.log('id',result.rows[0].id)
        //what do I want to do after a successfull submission
        // console.log(`isnide success ful promist from query res from add user /WHAT DO YOU WANT TO RETURN: ${result.rows[0].id}`)
        return result;
      })
      .catch((err) => {
        console.log(`err on adduser: ${err}`);
        return err;
      });
  };
  const addVolunteerUser = (
    fullName,
    age,
    email,
    password,
    phoneNumber,
    postalCode,
    lat,
    long,
    available,
    specialSkills
  ) => {
    //console.log(`adding user`)
    const query = {
      text: `INSERT INTO users_volunteers (full_name, age, email_address, password, phone_number, postal_code, lat, long, available, special_skills) VALUES ($1, $2, $3, $4, $5,$6,$7, $8, $9,$10) RETURNING *`,
      values: [
        fullName,
        age,
        email,
        password,
        phoneNumber,
        postalCode,
        lat,
        long,
        available,
        specialSkills,
      ],
    };

    return db
      .query(query)
      .then((result) => {
        // console.log('id',result.rows[0].id)
        // console.log(`isnide success ful promist from query res from add user / want to return userID for the token: ${result.rows[0].id}`)
        return result.rows[0];
      })
      .catch((err) => {
        console.log(`err on adduser: ${err}`);
        return err;
      });
  };

  return {
    getUserByEmail,
    getUsers,
    getVolunteersUsers,
    addUser,
    addRequest,
    getRequests,
    addVolunteerUser,
    getVolunteerByEmail
  };
};
