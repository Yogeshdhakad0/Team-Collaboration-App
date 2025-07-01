








const jwt = require('jsonwebtoken');
// const User = require('../models/authmodel');
const expressAsyncHandler = require('express-async-handler');
const User = require('../models/authmodel');

const protect = expressAsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, 'your_jwt_secret_key');

      const user = await User.findById(decoded.id).select("-password");

      // 🛡️ Admin check
      if (!user.isadmin) {
        res.status(403); // Forbidden
        throw new Error("Access denied. Admins only.");
      }

      req.user = user; // assign to req
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});
module.exports = { protect };
