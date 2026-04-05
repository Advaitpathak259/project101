import express from "express"
import jwt from "jsonwebtoken"
import { middleware } from "./middleware";
import {JWT_SERECT}  from '@repo/backend-common/config'
import {createUserSchema,SignInSchema} from "@repo/common/types"

const app= express();

app.post('/signup', async (req,res)=>{
        const data = createUserSchema.safeParse(req.body);
        if(!data.success){
            res.json({
                message:"invalid inputs"
            })
            return;
        }
        //db  call 
        res.json({
           userId:"123"
        })
})

app.post('/signin', async (req,res)=>{
      const data = SignInSchema.safeParse(req.body);
      if(data.success){
        res.json({
            message:"invalid inputs"
        })
        return;
      }
        const userId=1;
        const token= jwt.sign({userId},JWT_SERECT)
        res.json({
            token
        })
})

app.post("/room",middleware, async(req,res)=>{
//db call
res.json({
    roomId:123
})
})

app.listen(3001);
