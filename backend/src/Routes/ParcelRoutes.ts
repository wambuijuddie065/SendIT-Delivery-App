import {Router} from "express"
import { addParcel, getParcel, getParcels, getreceiverParcels, getsenderParcels, softDeleteParcel, updateDelivered } from "../Controllers/ParcelControllers"


const routerP=Router()
routerP.post('/add',addParcel)
routerP.get('/',getParcels)
routerP.get('/:parcel_id',getParcel)
routerP.get('/sender/:sender_details',getsenderParcels)
routerP.get('/receiver/:receiver_details',getreceiverParcels)
routerP.get('/:parcel_id')


routerP.patch('/deliver/:parcel_id',updateDelivered)
routerP.patch ('/delete/:parcel_id',softDeleteParcel)

export default routerP