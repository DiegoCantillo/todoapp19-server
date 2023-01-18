const jwt = require("jsonwebtoken");
const AuthServices = require("../services/auth.service");
require('dotenv').config()

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await AuthServices.login(email, password);
    if (response.isValid) {
      const data = {
        email: response.result.email,
        username: response.result.username,
        id: response.result.id,
      };
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        algorithm: "HS512",
        expiresIn: "1m",
      });
      data.token = token;
      console.log(data);
      res.json(data);
    } else {
      res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { userLogin };
