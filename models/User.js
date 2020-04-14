const db = require('../db');

class User {
  static getByUsername(username) {
    const queryText = 'SELECT * FROM users WHERE username = $1';
    return db.query(queryText, [username])
      .then((data) => data.rows[0]);
  }

  static getByEmail(email) {
    const queryText = 'SELECT * FROM users WHERE email = $1';
    return db.query(queryText, [email])
      .then((data) => data.rows[0]);
  }

  static getById(userId) {
    const queryText = 'SELECT * FROM users WHERE id = $1';
    return db.query(queryText, [userId])
      .then((data) => data.rows[0]);
  }

  static updateBio(userId, newBio) {
    const queryText = 'UPDATE users SET bio = $1 WHERE id = $2';
    return db.query(queryText, [newBio, userId]);
  }
}

module.exports = User;
