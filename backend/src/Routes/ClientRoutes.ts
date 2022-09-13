import {Router} from "express"


const routerC=Router()
routerC.post('/register')//register
routerC.post('/login')//login
routerC.get('/')//getusers
routerC.get('/:id')//get user by id
routerC.get('/dashboard')//navigate to dashboard
routerC.get('/check')//check role
routerC.patch('')


export default routerC
