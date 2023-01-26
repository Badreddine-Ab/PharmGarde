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
     if (!users) res.status(400).json("can't find this user");
    else {
      const payload = { _id: users.id };
      if (await bcryptjs.compare(password, users[0].password)) {
        localstorage("token",jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: "120m" }));
        res.status(200).json({ token: localstorage("token"), username: users[0].name });
      } else res.status(400).json("password invalide");
    }
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

// method : post => url : api/user/forgetpassword =>acces : public
exports.ForgetPassword = async (req, res) => {
  try {
    const user =await User.findOne("email", req.body.email);
    if (user) {
      sendEmail(user[0].email, jwt.sign({ _id: user[0].id }, process.env.ACCESS_TOKEN, {expiresIn: "10m", }),
        user[0].name,"to reset your password", "/restpassword/");
      res.status(200).json("vérifiez votre email");
    } else {
      res.status(400).json("invalide mail");
      console.log("im here")
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.restpassword = async (req, res) => {
  const decodedToken = jwt.verify(req.params.token, process.env.ACCESS_TOKEN);
  if (!decodedToken) console.log("error  token");
  console.log(req.body.password)
  User.update(decodedToken._id, {
    'password': bcryptjs.hashSync(req.body.password, 10),
  })
    .then((result) => {
      res.satuts(400).send(result);
    })
    .catch((e) => {
      res.satuts(400).send(e);
    });
};
