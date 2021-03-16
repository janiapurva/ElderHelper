

module.exports = (db) => {
  
    const getUsers = () => {
    const query = {
      text: "SELECT * FROM users_elders",
    };

    return db
      .query(query)
      .then((result) => console.log(result.rows))
      .catch((err) => err);
  };

  const getUserByEmailandPassWord = (email_address, password) => {
    const query = {
      text: `SELECT * FROM users_elders WHERE email_address = $1 and password = $2;`,
      values: [email_address, password],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addUser = (
    fullName,
    age,
    email,
    password,
    phoneNumber,
    postalCode,
    afiliations
  ) => {
    console.log(`adding user`)
    const query = {
      text: `INSERT INTO users_elders (full_name, age, email_address, password, phone_number, postal_code, belongs_to) VALUES ($1, $2, $3, $4, $5,$6,$7) RETURNING *`,
      values: [
        fullName,
        age,
        email,
        password,
        phoneNumber,
        postalCode,
        afiliations,
      ],
    };

    return db
      .query(query)
      .then((result) => {
        console.log(`res from add user: ${result}`)
        return result.rows[0]
      })
      .catch((err) => {
        console.log(`err on adduser: ${err}`)
        return err
      });
  };

  const getUsersPosts = () => {
    const query = {
      text: `SELECT users.id as user_id, first_name, last_name, email, posts.id as post_id, title, content
      FROM users
      INNER JOIN posts
      ON users.id = posts.user_id`,
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  return {
    getUsers,
    getUserByEmailandPassWord,
    addUser,
    getUsersPosts,
  };
  
};
