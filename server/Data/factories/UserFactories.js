const bcryptjs = require("bcryptjs");
// create user accout
const hash =bcryptjs.hashSync("admin",10)
const Users = 
  {
    name: "The big 4",
    email: "admin@gmail.com",
    password: hash,
  }

module.exports = Users;
