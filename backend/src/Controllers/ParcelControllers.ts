import { Request, RequestHandler, Response } from "express"
import {v4 as uid}  from 'uuid'
import Connection from "../DatabaseHelpers/db"
import { ParcelSchema1 } from "../Validators/ParcelValidator"

const db=new Connection()



interface ExtendedRequest extends Request{
    body:{
        parcel_id:string,
        sender_details:string
        receiver_details:string
        pick_up:string
        destination:string
        description:string
        weight:number
        price:number
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
        const { error, value } = ParcelSchema1.validate(req.body);
        if (error) {
          res.status(401).json({ error: error.details[0].message });
        }
       
        
        db.exec('insertUpdateParcel',{ parcel_id,sender_details,receiver_details,pick_up,destination,description,weight,price,status})
        res.status(201).send("Parcel Added Successfully!")
    } catch (error) {
        res.status(400).send("Failed To Add Parcel!")
    }
}

export const getParcels:RequestHandler=async(req,res)=>{
    try {
        const parcels=(await db.exec('getParcels'))
        res.status(200).json(parcels.recordset)
        
    } catch(error){
        res.status(404).send("Parcels Not Found!")
        
    }
}
export const getParcel:RequestHandler<{parcel_id:string}>=async(req,res)=>{
    try {
        const parcel_id=req.params.parcel_id
        const {recordset}=await db.exec('getParcel',{parcel_id})
        if(!recordset[0]){
            res.status(404).send("Parcel Not Found!")
        }
        else{
            res.status(200).json(recordset)
        }
        
    } catch (error) {
        res.status(400).send("An Error Occurred!")
        
    }
}
export const updateDelivered:RequestHandler<{parcel_id:string}>=async(req,res)=>{
    try {
        let parcel_id=req.params.parcel_id
        const {sender_details,receiver_details,pick_up,destination,description,weight,price,status,is_delivered} = req.body as {
           
            parcel_id:string,
        sender_details:string
        receiver_details:string
        pick_up:string
        destination:string
        description:string
        weight:number
        price:number
        status:string
    
        is_delivered:string
        
          }
             const {recordset} =await db.exec('getParcel',{parcel_id})
            if(!recordset[0]){
                res.status(404).send("Parcel Not Found!")
            }else{
               await  db.exec('insertUpdateParcel',{parcel_id,sender_details,receiver_details,pick_up,destination,description,weight,price,status,is_delivered})
                res.status(200).json({message:'Parcel Updated'})
            }
        
        
    } catch (error) {
        res.status(400).send("An Error Occurred!")
        
    }
}

export const softDeleteParcel:RequestHandler<{parcel_id:string}>=async(req,res)=>{
    try {
        let parcel_id=req.params.parcel_id
       
        
        const {is_cancelled}=req.body as {
            is_cancelled:string
        }
        const {recordset}=await db.exec('getParcel',{parcel_id})
        
        
        if(!recordset[0]){
            res.status(404).send("Parcel Not Found!")
        }else{
            await db.exec('deleteParcel',{parcel_id})
            res.status(200).json({message:'Parcel Deleted Successfully!'})

        }

        
    } catch (error) {
        res.status(400).send("An Error Occurred!")
        
    }

}

//get sender_parcels
export const getsenderParcels:RequestHandler<{sender_details:string}>=async(req,res)=>{
try {
const sender_details=req.params.sender_details
const parcels=await db.exec('getSenderParcels',{sender_details})
const {recordset}=parcels
if (!parcels.recordset[0]) {
    res.status(404).send("Parcel Not Found!")
  } else {
    res.status(200).json(recordset);
   
  }

    
} catch (error) {
    res.status(400).send("An Error Occurred!")
    
}

}


//get receiver_parcels

export const getreceiverParcels:RequestHandler<{receiver_details:string}>=async(req,res)=>{
    try {
    const receiver_details=req.params.receiver_details
    const parcels=await db.exec('getReceiverParcels',{receiver_details})
    const {recordset}=parcels
    if (!parcels.recordset[0]) {
        res.status(404).send("Parcel Not Found!")
      } else {
        res.json(recordset);
       
      }
    
        
    } catch (error) {
        res.status(400).send("An Error Occurred!")
        
    }
    
    }
    