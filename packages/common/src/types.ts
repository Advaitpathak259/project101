import z from "zod";


export const createUserSchema = z.object({
   username:z.string().min(6).max(20),
   password:z.string(),
   name: z.string()
})


export const SignInSchema = z.object({
    username:z.string().min(6).max(20),
   password:z.string(),

})

export const createRoomSchema=z.object({
 roomName: z.string().min(5).max(15)
})