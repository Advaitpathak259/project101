import express from "express"
import jwt from "jsonwebtoken"
import { middleware } from "./middleware";
const app= express();

app.post('/signup', async (req,res)=>{
        //zod validations
        //db  call 
        res.json({
           userId:"123"
        })
})

app.post('/signin', async (req,res)=>{
        const userId=1;
        const token= jwt.sign({userId},"123456")
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