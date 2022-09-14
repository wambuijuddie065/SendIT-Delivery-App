import { Request, RequestHandler, Response } from "express"
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

export const getParcels:RequestHandler=async(req,res)=>{
    try {
        const parcels=(await db.exec('getParcels'))
        res.json(parcels.recordset)
        
    } catch(error:any){
        res.json({error})
        
    }
}
export const getParcel:RequestHandler<{parcel_id:string}>=async(req,res)=>{
    try {
        const parcel_id=req.params.parcel_id
        const {recordset}=await db.exec('getParcel',{parcel_id})
        if(!recordset[0]){
            res.json({message:"Parcel Not Found!"})
        }
        else{
            res.json(recordset)
        }
        
    } catch (error) {
        res.json({error})
        
    }
}
export const updateDelivered:RequestHandler<{parcel_id:string}>=async(req,res)=>{
    try {
        let parcel_id=req.params.parcel_id
        const {status,is_delivered} = req.body as {
           
            status:string,
            is_delivered:string
          }
             const {recordset} =await db.exec('getParcel',{parcel_id})
            if(!recordset[0]){
               res.json({ message: 'Parcel Not Found' })
            }else{
               await  db.exec('insertUpdateParcel',{status,is_delivered})
                res.json({message:'Parcel Updated'})
            }
        
        
    } catch (error) {
        res.json({error})
        
    }
}