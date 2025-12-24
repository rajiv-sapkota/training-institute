
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

class AuthController {
    async registerUser(req: Request, res: Response) {
        // accept incomming data
        const { userName, email, password, phoneNumber, } = req.body
        // validate data   
        if (!userName || !email || !password || !phoneNumber) {
            return res.status(400).json({ message: "Please fill all the required fields" })
        } else {
            //db query to insert data to table
            await User.create({
                userName,
                email,
                phoneNumber,
                password
            })
            res.status(201).json({
                message: "Congratulations!!! User registered successfully",
                data: {
                    userName,
                    email,
                    phoneNumber,
                }
            })
            
        }
         
         
    }
    async loginUser(req: Request, res: Response) {
        res.status(200).json({ message: "Login User Controller" })
    }
}
export default new AuthController();
