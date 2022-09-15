import {Router} from "express"
import { addParcel, getParcel, getParcels, getsenderParcels, softDeleteParcel, updateDelivered } from "../Controllers/ParcelControllers"


const routerP=Router()
routerP.post('/add',addParcel)
routerP.get('/',getParcels)
routerP.get('/:parcel_id',getParcel)
routerP.get('/:sender_details',getsenderParcels)
routerP.get('/:parcel_id')


routerP.patch('/deliver/:parcel_id',updateDelivered)
routerP.patch ('/delete/:parcel_id',softDeleteParcel)

export default routerP