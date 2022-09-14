import {Router} from "express"
import { addParcel, getParcel, getParcels, updateDelivered } from "../Controllers/ParcelControllers"


const routerP=Router()
routerP.post('/add',addParcel)
routerP.get('/',getParcels)
routerP.get('/:parcel_id',getParcel)
routerP.patch('/deliver/:parcel_id',updateDelivered)
routerP.delete('')

export default routerP