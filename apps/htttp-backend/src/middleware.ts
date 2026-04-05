import {NextFunction,Request,Response} from "express";
import jwt from "jsonwebtoken"
import { JWT_SERECT } from "@repo/backend-common/config";

export function middleware(req:Request,res:Response,next:NextFunction){
    //@ts-ignore
      const token  = req.headers["authorization"] ?? "";
       const decodedtoken= jwt.verify(token,JWT_SERECT);
       //todo get the global to know there should be no tsconfig ro this 
       
       if(decodedtoken){
        //@ts-ignore
            req.userId= decodedtoken ;
       next();
}   else{

           res.status(403).json({
            message:" not  authenticated"
           })
       
        }
    }