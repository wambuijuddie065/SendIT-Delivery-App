import ejs from 'ejs'
import dotenv from 'dotenv'
import sendMail from '../Helpers/Email'
import { sqlConfig } from '../Config/Config'

dotenv.config()

interface Parcel{
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