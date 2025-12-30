import { Request, Response } from "express";
import sequelize from "../../database/connection";



class InstituteController {
    static async createInstitute(req: Request, res: Response) {
        const { instituteName, instituteAddress, instituteEmail, instituteContact } = req.body
        const insttutePAN = req.body.insttutePAN || null
        const instituteVAT = req.body.instituteVAT || null
    
        //validate data
        if (!instituteName || !instituteAddress || !instituteEmail || !instituteContact) {
            res.status(400).json({
                message: "Please fill all the required fields"
                
            })
            
        }

        

        
    }

    
}
export default InstituteController;

