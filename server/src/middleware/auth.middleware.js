import jwt from "jsonwebtoken"
import User from "../model/user.model.js"

export const protectRoute = async (req, res, next) =>{
    try{
        const token = req.cookies.jwt

        if(!token) {
            return res.status(401).json({message: "Unauthorized - You must be logged in first"})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!token){
            return res.status(401).json({message: "Unauthorized - Credentials invalid"})
        }

    }catch(error){

    }
}