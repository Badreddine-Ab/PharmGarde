const User = require('../models/user')
const bcryptjs = require("bcryptjs");
const apiError = require("../utils/apiError")


exports.Login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return next(new apiError('Missing required fields',400))
        }
        const users = await User.findOne({ email:email});
        if (!users) res.status(400).json("can't find this user");
        else {
          const payload = { userId: users.id, username: users.name };
          if(await bcryptjs.compare(password, users.password)) {
            localstorage("token", jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: "120m" }));
            res.status(200).json({ token: localstorage("token"), username:users.name});
          } else res.status(400).json("password invalide");
        }
      } catch (e) {
        return res.status(400).json(e.message);
      }
};