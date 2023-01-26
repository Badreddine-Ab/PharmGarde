const User = require("../models/user");
const apiError = require("../utils/apiError");
const jwt = require("jsonwebtoken");
const localstorage = require("local-storage");
const bcryptjs = require("bcryptjs");
const { sendEmail } = require("../utils/Email");

// exports.register = async (req, res, next) => {
//   try {
//     const { name, email, password } = req.body;
//     const hash = bcryptjs.hashSync(password, 10);
//     if (!name || !email || !password) {
//       return next(new apiError("Missing required fields", 400));
//     }
//     res.status(201).json(await User.register({ name, email, hash }));
//   } catch (error) {
//     res.status(500).send({ error: "Error adding new user" });
//   }
// };

exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new apiError("Missing required fields", 400));
    }
    const users = await User.findOne("email", email);
     if (users) {
      const payload = { _id: users.id };
      if (await bcryptjs.compare(password, users.data.password)) {
        localstorage("token",jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: "120m" }));
        res.status(200).json({ token: localstorage("token"), username: users.data.name });
     }       else res.status(400).json("password invalide");

    }    else  res.status(400).json("can't find this user");    
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

// method : post => url : api/user/forgetpassword =>acces : public
exports.ForgetPassword = async (req, res) => {
  try {
    const user =await User.findOne("email", req.body.email);
 if (user) {
      sendEmail(user.data.email, jwt.sign({ _id: user.id }, process.env.ACCESS_TOKEN, {expiresIn: "10m", }),
        user.data.name,"to reset your password", "/restpassword/");
      res.status(200).json("vérifiez votre email");
    } else {
      res.status(400).json("invalide mail");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.restpassword = async (req, res) => {
  try{
 const decodedToken = jwt.verify(req.params.token, process.env.ACCESS_TOKEN);
  if (!decodedToken) res.status(400).json("error  toke")
  else {
    User.update(decodedToken._id, {'password': bcryptjs.hashSync(req.body.password, 10)})
    res.status(200).json("password modifier");
  }
 }catch(e){
    res.status(400).json(e.message);

  }
}
