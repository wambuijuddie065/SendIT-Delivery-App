import express, { json, NextFunction, Request, Response,Router } from 'express'
import cors from 'cors'

import routerP from './Routes/ParcelRoutes'
import routerC from './Routes/ClientRoutes'

const app=express()

app.use(json())
app.use(cors())

app.use('/parcels',routerP)
app.use('/clients',routerC)


app.use((err:Error ,req:Request,res:Response,next:NextFunction)=>{
    res.json({Error:err.message})
})

app.listen(5000,()=>{
    console.log("Application Running");
    
})