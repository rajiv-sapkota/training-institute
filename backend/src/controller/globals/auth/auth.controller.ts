
/*
Register Controller => accept incomming data, validate it, db query
Login Controller
Logout Controller
Forgot Password Controller
Reset Password Controller
Otp Verification Controller
*/

import { Request, Response } from "express"
import User from "../../../database/models/user.model"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
  async registerUser(req: Request, res: Response) {
    // accept incomming data
    const { userName, email, password, phoneNumber } = req.body;

    const existingUser=await User.findOne({where:{email}})
    // validate data
    if (!userName || !email || !password || !phoneNumber) {
      return res
        .status(400)
        .json({ message: "Please fill all the required fields" });
    } else if(!existingUser) {
      //db query to insert data to table
      await User.create({
        userName,
        email,
        phoneNumber,
        password: bcrypt.hashSync(password, 10),
      });
      res.status(201).json({
        message: "Congratulations!!! User registered successfully",
        data: {
          userName,
          email,
          phoneNumber,
        },
      });
    }else {
      return res.status(409).json({message:"User with same email already exists"})
    }
  }

  //login controller
    async loginUser(req: Request, res: Response) {

    try {
      const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
      
    
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      } 

      const isPasswordMatched = await bcrypt.compare(password, user.password);

      if (!isPasswordMatched) {

        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token=jwt.sign({id:user.id},"abcde",{expiresIn:'1d'})

      
      return res.status(200).json({
        message: "Login successful",
        data: {
          email: user.email,
          userName: user.userName,
          token:token
        },
      });
    } catch (error) {
      return res.status(500).json({ message: "Server error" });
    }
  }
}
export default new AuthController();
