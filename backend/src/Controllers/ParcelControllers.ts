import { Request, Response } from "express"
import {v4 as uid}  from 'uuid'
import Connection from "../DatabaseHelpers/db"
const db=new Connection()



interface ExtendedRequest extends Request{
    body:{
        parcel_id:string,
        sender_details:string
        receiver_details:string
        pick_up:string
        destination:string
        description:string
        weight:string
        price:string
        status:string
        is_dispatched:string
        is_delivered:string
        is_cancelled:string

    }
}

export const addParcel=async(req:ExtendedRequest,res:Response)=>{
    try {

        const id=uid()
        const{sender_details,receiver_details,pick_up,destination,description,weight,price,status}=req.body
        const parcel_id=id
        // console.log(parcel_id);
        
        db.exec('insertUpdateParcel',{ parcel_id,sender_details,receiver_details,pick_up,destination,description,weight,price,status})
        res.status(201).json({message:"Parcel Added Successfully!"})
    } catch (error:any) {
        res.json({error})
    }
}