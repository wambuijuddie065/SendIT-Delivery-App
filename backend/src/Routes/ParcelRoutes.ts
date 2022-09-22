
import {Router} from "express"
import { addParcel, getParcel, getParcels, getreceiverParcels, getsenderParcels, softDeleteParcel, updateDelivered } from "../Controllers/ParcelControllers"
import { VerifyToken } from "../Middleware/VerifyToken"


const routerP=Router()
routerP.post('/add',VerifyToken,addParcel)//remember to protect routes using verify token
routerP.get('/',VerifyToken,getParcels)
routerP.get('/:parcel_id',VerifyToken,getParcel)
routerP.get('/sender/:sender_details',VerifyToken,getsenderParcels)
routerP.get('/receiver/:receiver_details',VerifyToken,getreceiverParcels)
routerP.get('/:parcel_id')


routerP.patch('/deliver/:parcel_id',VerifyToken,updateDelivered)
routerP.delete ('/delete/:parcel_id',VerifyToken,softDeleteParcel)

export default routerP