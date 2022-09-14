import {Router} from "express"
import { addParcel } from "../Controllers/ParcelControllers"


const routerP=Router()
routerP.post('/add',addParcel)
routerP.get('')
routerP.get('/:id')
routerP.patch('')
routerP.delete('')

export default routerP