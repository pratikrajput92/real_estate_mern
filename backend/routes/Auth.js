import express, { json } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


const router = express.Router();

// User Registration

router.post("/register", async (req, res) => {
  try {
   const hashedPass = await bcrypt.hash(req.body.password, 10);

   const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPass
   });

   await user.save();
   res.status(201).json({message: "user Registered"});

  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

// User Login 

router.post("/login", async (req, res) =>{
  try{
    const user = await user.findOne({email: req.body.email});
    if(!user) return res.status(404).json({message: "User Not Found"});

    const valid = await bcrypt.compare(req.body.password, user.password);
    if(!valid) return res.status(404).json({message: "Wrong Password"});

    const token = jwt.sign(
      {id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {expiresIn: "7d"}
    );

    res.json({user, token });
  } catch(error){
    res.status(500).json({error: error.message });
  }
});



// Admin Register 

router.post("/admin-register",  async (req, res)=> {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);

    const admin = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
      role: "admin"
    });
    await admin.save()
    res.status(201).json({message: "Admin Created"});
  } catch (error) {
    res.status(404).json({error: error.message});
  }
});


// Admin Login 

router.post("/admin-login", async (req, res)=> {
  try {
    const admin = await User.findOne({email: req.body.email});
    
    if(!admin || admin.role !== "admin") {
      return res.status(403).json({message: "Not An Admin"});
    }

    const valid = await bcrypt.compare(req.body.password, admin.password);
    if(!valid) return  res.status(404).json({message: "Wrong Password"});

    const token = JWT.sign(
      {id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      {expiresIn: "7d"}
    );
    res,json({admin,token});

  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

export default router;