

import dotenv from 'dotenv'
import { v4 as uid} from 'uuid'
import bcrypt from "bcrypt"
import { Request, RequestHandler, Response } from 'express'
import { sqlConfig } from '../Config/Config'
import jwt from 'jsonwebtoken'
import Connection from '../DatabaseHelpers/db'
import { Client, Data } from '../Interfaces/interfaces'
import { ClientSchemaLog, ClientSchemaReg } from '../Validators/ClientValidator'
const db=new Connection()

dotenv.config()
interface Extended extends Request{
    info?: Data
}

interface ExtendedRequest extends Request{
    body:{
        name:string
        email:string
        contact:string
        password:string
    }
}

export const registerClient=async (req:ExtendedRequest,res:Response)=>{
    try {
        const id=uid()
        let {name,email,contact,password}=req.body
        const {error,value}=ClientSchemaReg.validate(req.body)
        if(error){
            res.json({error:error.details[0].message})
        }
        const client_id=id
        password=await bcrypt.hash(password,10)
       
        db.exec('insertClient',{client_id,name,email,contact,password})
        res.json({message:"Client added successfully"})
        // res.status(201).json({message:"Client added successfully"})
        
    } catch(error:any){
        res.json({error})
        
    }
   
}
export const loginClient=async(req:ExtendedRequest,res:Response)=>{
    try {
        let{name,email,contact,password}=req.body
        const {error,value}=ClientSchemaLog.validate(req.body)
        if (error){
            res.json({error:error.details[0].message})
        }
        const client:Client[]=(await db.exec('getClient',{email})).recordset
        if(!client[0]){
            return res.json({message:"client Not Found!"})

        }else{
            const validPassword=await bcrypt.compare(password,client[0].password)
            if(!validPassword){
                return res.json({message:"Invalid Password!"})
            }
            const payload=client.map((item)=>{
                const{password,...rest}=item
                return rest
            })

            const token=jwt.sign(payload[0],process.env.KEY as string,{
                expiresIn:"3600000s"
            })
            return res.json({message:"Client Logged In Successfully!",token, role:client[0].role})

        }
        
    } catch(error:any){

        res.json({error})
        
    }
        
}
// export const getDashboard=async(req:Extended,res:Response)=>{
//     if(req.info){
//         res.json({message:`Dear ${req.info.name} Welcome to the dashboard`})
//     }
// }

export  const  getClients:RequestHandler=async(req,res)=>{
    try {
        const clients=(await db.exec('getClients'))
        res.json(clients.recordset)
        
    } catch(error:any){
        res.json({error})
        
    }

}