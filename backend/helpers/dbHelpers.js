module.exports = (db) => {
  //TABLE --- users_elders ---
  const getUsers = () => {
    const query = {
      text: "SELECT * FROM users_elders",
    };

    return db.query(query).then((result) => {
      return result.rows;
    });
  };
  /////////////////////////////////////////////////
  
  const addUser = (
    fullName,
    age,
    email,
    password,
    phoneNumber,
    postalCode,
    lat,
    long,
    street_address
  ) => {
    const query = {
      text: `INSERT INTO users_elders (full_name, age, email_address, password, phone_number, postal_code,lat,long, street_address) VALUES ($1, $2, $3, $4, $5,$6,$7,$8,$9) RETURNING *`,
      values: [
        fullName,
        age,
        email,
        password,
        phoneNumber,
        postalCode,
        lat,
        long,
        street_address,
      ],
    };

    return db.query(query).then((result) => {
      return result.rows[0];
    });
  };
  //////////////////////////////////////////////////////
  
  const getUserByEmail = (email_address) => {
    const query = {
      text: `SELECT * FROM users_elders WHERE email_address = $1;`,
      values: [email_address],
    };
    return db.query(query).then((result) => {
      if (result.rows.length < 0) {
        console.log("ERROR, emaild does not exist");
      } else {
        return result.rows[0];
      }
    });
  };
  //////////////////////////////////////////////////////
  
  const addContactsForUser = (
    full_name,
    phone_number,
    email_address,
    belongs_to
  ) => {
    const query = {
      text: `INSERT INTO users_relatives (full_name, phone_number, email_address,elder_id) VALUES ($1, $2, $3, $4) RETURNING *`,
      values: [full_name, phone_number, email_address, belongs_to],
    };
    return db.query(query).then((result) => {
      console.log("Successfull insert!");
    });
  };
  /////////////////////////////////////////////////

  //TABLE --- users_volunteers ---
  const getVolunteersUsers = () => {
    const query = {
      text: "SELECT * FROM users_volunteers",
    };
    return db.query(query).then((result) => {
      return result.rows;
    });
  };
  /////////////////////////////////////////////////
  
  const getVolunteerByEmail = (email_address) => {
    const query = {
      text: `SELECT * FROM users_volunteers WHERE email_address LIKE $1;`,
      values: [email_address],
    };
    return db.query(query).then((result) => {
      return result.rows;
    });
  };
  /////////////////////////////////////////////////

  const addVolunteerUser = (
    fullName,
    age,
    email,
    password,
    phoneNumber,
    postalCode,
    lat,
    long,
    street_address,
    specialSkills
  ) => {
    //console.log(`adding user`)
    const query = {
      text: `INSERT INTO users_volunteers (full_name, age, email_address, password, phone_number, postal_code,lat,long, street_address, special_skills) VALUES ($1, $2, $3, $4, $5,$6,$7, $8, $9,$10) RETURNING *`,
      values: [
        fullName,
        age,
        email,
        password,
        phoneNumber,
        postalCode,
        lat,
        long,
        street_address,
        specialSkills,
      ],
    };

    return db.query(query).then((result) => {
      return result.rows[0];
    });
  };
  /////////////////////////////////////////////////  

  //TABLE --- requests ---

  const getCountRequests = (id) => {
    const query = {
      text: `SELECT COUNT(*) FROM requests WHERE posted_by = $1;;`,
      values: [id],
    };
    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => console.log("line 147 dbhelpers", err));
  };
  /////////////////////////////////////////////////
  
  const getPendingRequests = () => {
    const query = {
      text: `SELECT 
      r.id, ue.full_name as posted_by, r.date_of_request, r.task_description, r.task_postal_code, r.lat, r.long,r.date_posted, uv.full_name as fullilled_by_volunter, r.status 
      FROM requests r 
      LEFT JOIN users_volunteers uv ON r.fullilled_by_volunter=uv.id 
      LEFT JOIN users_elders ue ON r.posted_by = ue.id  
      WHERE status IN ('pending') `,
    };
    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => console.log("line 165 dbhelpers", err));
  };
  /////////////////////////////////////////////////
  
  const getAcceptedAndCompletedRequestsForVolunteer = (id) => {
    const query = {
      text: `SELECT 
        r.id, ue.full_name as posted_by, r.date_of_request, r.task_description, r.task_postal_code, r.lat, r.long,r.date_posted, uv.full_name as fullilled_by_volunter, r.status 
        FROM requests r 
        LEFT JOIN users_volunteers uv ON r.fullilled_by_volunter=uv.id 
        LEFT JOIN users_elders ue ON r.posted_by = ue.id  
        WHERE status IN ('accepted', 'complete') and fullilled_by_volunter = $1;`,
      values: [id],
    };
    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => console.log("line 186 dbhelpers", err));
  };
  /////////////////////////////////////////////////
  
  const getUserPastRequests = (id) => {
    const query = {
      text: `SELECT 
        r.id, ue.full_name as posted_by, r.date_of_request, r.task_description, r.task_postal_code, r.lat, r.long,r.date_posted, uv.full_name as fullilled_by_volunter, r.status 
        FROM requests r 
        LEFT JOIN users_volunteers uv ON r.fullilled_by_volunter=uv.id 
        LEFT JOIN users_elders ue ON r.posted_by = ue.id  
        WHERE posted_by = $1;`,
      values: [id],
    };
    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => console.log("line 204 dbhelpers", err));
  };
  //////////////////////////////////////////////////

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
    const query = {
      text: `INSERT INTO requests (posted_by, date_of_request, task_description, task_postal_code,lat,long, date_posted, fullilled_by_volunter, status) VALUES ($1, $2, $3, $4, $5,$6,$7, $8,$9) RETURNING *`,
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
        return result;
      })
      .catch((err) => {
        console.log(`err on adduser, dbhelper 241: ${err}`);
        return err;
      });
  };
  /////////////////////////////////////////////////
 
  const updateRequest = (
    fullilled_by_volunter,
    status,
    requestID
  ) => {
    console.log(`Updated status to complete`);

    const query = {
      text: `UPDATE requests SET fullilled_by_volunter = $1, status=$2 WHERE requests.id = $3  RETURNING *`,
      values: [fullilled_by_volunter, status, requestID],
    };

    return db
      .query(query)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(`err on update status to accept: ${err}`);
        return err;
      });
  };
  /////////////////////////////////////////////////
  
  const getUsersRelatives = (id) => {
    //gets relatives along with
    const query = {
      text: `SELECT ur.full_name AS Relative, ur.phone_number, ur.email_address, ue.full_name AS Elder , r.task_description, r.date_of_request FROM users_relatives ur JOIN requests r on ur.elder_id = r.posted_by JOIN users_elders ue ON ue.id = ur.elder_id  WHERE elder_id = $1 AND date_of_request > CURRENT_DATE;
      `,
      values: [id],
    };

    return db.query(query).then((result) => {
      return result.rows;
    });
    // .catch((err) => err);
  };
  /////////////////////////////////////////////////

  return {
    getUserByEmail,
    getUsers,
    getVolunteersUsers,
    addUser,
    addRequest,
    getCountRequests,
    addVolunteerUser,
    getUserPastRequests,
    getVolunteerByEmail,
    getPendingRequests,
    updateRequest,
    getAcceptedAndCompletedRequestsForVolunteer,
    getUsersRelatives,
    addContactsForUser,
  };
};
