import {Router} from "express"
import {  getClientById, getClients, getName, loginClient, registerClient } from "../Controllers/ClientControllers"


const routerC=Router()
routerC.post('/register',registerClient)//register
routerC.post('/login',loginClient)//login
routerC.get('/',getClients)//getusers
routerC.get('/:client_id',getClientById)//get clientby id
routerC.get('/name/:email',getName)
// routerC.get('/dashboard',getDashboard)//navigate to dashboard

routerC.patch('')


export default routerC
