const UserModel = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const { createAccessToken } = require("../libs/jwt");
const jwt = require("jsonwebtoken")
const TOKEN_SECRET = require("../config")

const register = async (req, res) => {
   const { email, password, username } = req.body;

   try {

      const userFound = await UserModel.findOne({email})
      if(userFound){
         return res.status(400).json(["email is already in use"])
      }

      const passwordHash = await bcryptjs.hash(password, 10);

      const newUser = new UserModel({
         username,
         email,
         password: passwordHash,
      });

      const userSaved = await newUser.save();
      const token = await createAccessToken({ id: userSaved._id });

      res.cookie("token", token); //guardar token en una cookie
      res.json({
         id: userSaved._id,
         username: userSaved.username,
         email: userSaved.email,
         createdAt: userSaved.createdAt,
      });
      // res.json(userSaved); //devuelve todo el objeto (password)
   } catch (error) {
      res.status(500).json({ msg: error.message });
   }
};

const login = async (req, res) => {
   try {
      const { email, password } = req.body;
      //verificar si existe la cuenta
      const userFound = await UserModel.findOne({ email });
      if (!userFound) return res.status(400).json({ msg: "error" }); // no se encontro

      const isMatch = await bcryptjs.compare(password, userFound.password); // devuelve true or false
      if (!isMatch) return res.status(400).json({ msg: "error" });

      const token = await createAccessToken({ id: userFound._id }); //token del userFound

      res.cookie("token", token); //guardar token en una cookie
      res.json({
         id: userFound._id,
         username: userFound.username,
         email: userFound.email,
         createdAt: userFound.createdAt,
      });
   } catch (error) {
      res.status(500).json({ msg: error.message });
   }
};

const logout = (req, res) => {
   //vaciar token
   res.cookie("token", "", {
      expires: new Date(0), //valor a 0
   });
   return res.sendStatus(200);
};

const profile = async (req, res) => {
   const userFound = await UserModel.findById(req.user.id);

   if (!userFound) return res.status(400).json({ msg: "not found" });

   return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
   });

};

   const verifyToken = async (req, res) => {
   const { token } = req.cookies;
   if (!token) return res.send(false);
 
   jwt.verify(token, process.env.TOKEN_SECRET , async (error, user) => {
     if (error) return res.sendStatus(401);
 
     const userFound = await UserModel.findById(user.id);
     if (!userFound) return res.sendStatus(401);
 
     return res.json({
      id: userFound._id,
       username: userFound.username,
       email: userFound.email,
     });
   });
 };

module.exports = { login, register, logout, profile, verifyToken };
