import {Router} from "express"
import {  getClients, loginClient, registerClient } from "../Controllers/ClientControllers"


const routerC=Router()
routerC.post('/register',registerClient)//register
routerC.post('/login',loginClient)//login
routerC.get('/',getClients)//getusers
routerC.get('/:id')//get user by id
// routerC.get('/dashboard',getDashboard)//navigate to dashboard

routerC.patch('')


export default routerC
