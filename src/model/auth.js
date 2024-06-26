const Pool = require("../config/db");

const getAuthModel = async () => {
  return new Promise((resolve, reject) => {
    Pool.query("SELECT * FROM user_auth", (err, res) => {
      if (!err) {
        return resolve(res);
      } else {
        reject(err);
      }
    });
  });
};

const getAuthByEmailModel = async (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM user_auth WHERE email='${email}'`, (err, res) => {
      if (!err) {
        return resolve(res);
      } else {
        reject(err);
      }
    })
  );
};

const getAuthByIdModel = async (id_user) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT * FROM user_auth WHERE id_user='${id_user}'`,
      (err, res) => {
        if (!err) {
          return resolve(res);
        } else {
          reject(err);
        }
      }
    )
  );
};

const createAuthModel = async (data) => {
  let { id_user, email, password, name, phone, role, position, verifyotp } =
    data;
  console.log(data);
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO user_auth (id_user, email, password, name, phone, position, role, verifyotp, created_at, updated_at, isverify) VALUES ('${id_user}','${email}', '${password}', '${name}', '${phone}', '${position}', '${role}', '${verifyotp}', NOW(), NULL, true)`,
      (err, res) => {
        if (!err) {
          return resolve(res);
        } else {
          reject(err);
        }
      }
    )
  );
};

const createOtpAuthModel = async (otp, id_user) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `UPDATE user_auth set otp='${otp}' where id_user='${id_user}'`,
      (err, res) => {
        if (!err) {
          return resolve(res);
        } else {
          reject(err);
        }
      }
    );
  });
};

const nullOtpAuthModel = async (id_user) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `UPDATE user_auth set otp=NULL where id_user='${id_user}'`,
      (err, res) => {
        if (!err) {
          return resolve(res);
        } else {
          console.log(err);
          reject(err);
        }
      }
    );
  });
};

const getOtpAuthModel = async (otp) => {
  return new Promise((resolve, reject) => {
    Pool.query(`SELECT * FROM user_auth where otp='${otp}'`),
      (err, res) => {
        if (!err) {
          return resolve(res);
        } else {
          reject(err);
        }
      };
  });
};

const updatePasswordAuthModel = async (password, id_user) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `UPDATE user_auth set password='${password}' where id_user='${id_user}'`,
      (err, res) => {
        if (!err) {
          return resolve(res);
        } else {
          console.log(err);
          reject(err);
        }
      }
    );
  });
};

const activatedUser = async (id_user) => {
  console.log("model - activatedUser");
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE user_auth SET isverify=true WHERE id_user='${id_user}'`,
      (err, res) => {
        if (!err) {
          return resolve(res);
        } else {
          console.log(`error db -`, err);
          reject(err);
        }
      }
    )
  );
};

const updateAuthModel = async (data) => {
  let { id_user, email, phone, name } = data;
  console.log("model - updateAuthModel", data);
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE user_auth SET email='${email}', phone='${phone}', name='${name}' WHERE id_user='${id_user}'`,
      (err, res) => {
        if (!err) {
          console.log("succes");
          return resolve(res);
        } else {
          console.log(`error db -`, err);
          reject(err);
        }
      }
    )
  );
};

const updateAuthRecruiterModel = async (data) => {
  let { id_user, email } = data;
  console.log("model - updateAuthRecruiterModel");
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE user_auth SET email='${email}' WHERE id_user='${id_user}'`,
      (err, res) => {
        if (!err) {
          return resolve(res);
        } else {
          console.log(`error db -`, err);
          reject(err);
        }
      }
    )
  );
};

module.exports = {
  getAuthModel,
  getAuthByEmailModel,
  getAuthByIdModel,
  createAuthModel,
  createOtpAuthModel,
  getOtpAuthModel,
  nullOtpAuthModel,
  updatePasswordAuthModel,
  updateAuthModel,
  activatedUser,
  updateAuthRecruiterModel,
};
