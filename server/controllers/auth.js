const User = require("../models/user");
const apiError = require("../utils/apiError");
const jwt = require("jsonwebtoken");
const localstorage = require("local-storage");
const bcryptjs = require("bcryptjs");
const {sendEmail} = require('../utils/Email')

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hash = bcryptjs.hashSync(password, 10);
    if (!name || !email || !password) {
      return next(new apiError("Missing required fields", 400));
    }
    res.status(201).json(await User.register({ name, email, hash }));
  } catch (error) {
    res.status(500).send({ error: "Error adding new user" });
  }
};

exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new apiError("Missing required fields", 400));
    }
    const users = await (await User.findOne("email", email)).data();
    if (!users) res.status(400).json("can't find this user");
    else {
      const payload = { username: users.name };
      if (await bcryptjs.compare(password, users.password)) {
        localstorage("token",jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: "120m" }));
        res.status(200).json({ token: localstorage("token"), username: users.name });
      } else res.status(400).json("password invalide");
    }
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

// method : post => url : api/auth/forgetpassword =>acces : public
exports.ForgetPassword  = async(req, res) => 
{

  const user = await(await User.findOne("email",req.body.email)).data()

  console.log(user)
  try {
     if(!user) res.status(400).json('invalide mail')
     console.log("ha1")

//   localstorage('verifitoken',jwt.sign(user.email, process.env.ACCESS_TOKEN, { expiresIn: "10m" }))
  localstorage('verifitoken',jwt.sign({user:user.email}, process.env.ACCESS_TOKEN, { expiresIn: "10m" }))
  sendEmail(user.email,localstorage('verifitoken'),user.name,'to reset your password','/restpassword/')  
  res.status(200).json("verifies votre email")  
  } catch (error) {
  res.json(error)  
  } 
}