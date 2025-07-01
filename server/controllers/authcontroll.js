


const expressAsyncHandler = require("express-async-handler");
const bcrypt = require('bcryptjs');
const User = require('../models/authmodel');
const jwt = require('jsonwebtoken');

const registerauth = expressAsyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    res.status(400);
    throw new Error('Please fill all details');
  }

  const emailExist = await User.findOne({ email });
  const phoneExist = await User.findOne({ phone });

  if (emailExist || phoneExist) {
    res.status(400);
    throw new Error('User already exists with same email or phone');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    phone,
    password: hashedpassword
  });

  if (!user) {
    res.status(400);
    throw new Error("User cannot be created");
  }

  res.status(201).json({
    _id: user._id,
    name:user.name,
    email:user.email,
    isadmin:user.isadmin
  });
});


const loginauth = expressAsyncHandler(async (req, res) => {
  const { email, password  } = req.body;

  if (!email || !password ) {
    res.status(400);
    throw new Error("Please fill all details");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  // ✅ Send JWT token in response
  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    isadmin:user.isadmin,
    token: generateToken(user._id)
  });
});




const auth0login = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json({ msg: "User not found" });
  } else {
    // create token
    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    //   expiresIn: "7d",
    // });

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      isadmin: user.isadmin|| false,
      token:generateToken(user._id)
    });
  }
  console.log(user)
});















const generateToken = (userId) => {
  return jwt.sign({ id: userId }, 'your_jwt_secret_key', {
    expiresIn: '7d' 
  });
};

module.exports = { registerauth, loginauth ,auth0login};
