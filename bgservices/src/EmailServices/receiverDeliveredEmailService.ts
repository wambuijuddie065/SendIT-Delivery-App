import ejs from 'ejs'
import dotenv from 'dotenv'
import sendMail from '../Helpers/Email'
import { sqlConfig } from '../Config/Config'
import Connection from '../DatabaseHelpers/db'
const db=new Connection()

dotenv.config()

interface ParcelInterface{
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
const receiverParcelDeliveredEmail=async()=>{
    
    const parcels: ParcelInterface[]= await (await db.exec('getReceiverUndeliveredParcels')).recordset
    console.log("below these are receiver parcels",parcels);
  for(let parcel of parcels){
      ejs.renderFile('Templates/delivered.ejs',{parcel_id:parcel.parcel_id,sender_details:parcel.sender_details,
        receiver_details:parcel.receiver_details,pick_up:parcel.pick_up,destination:parcel.destination,description:parcel.description,
        weight:parcel.weight,price:parcel.price
      },async(error,data)=>{
          let mailOptions={
              from:process.env.EMAIL,
              to:parcel.receiver_details,
              subject:'Parcel delivered successfully',
              html:data,
              attachments:[
                  {
                      filename:'sendIT.txt',
                      content:`Your parcel has been successfully delivered by  : ${parcel.sender_details}`
                  }
              ]
          }
          try {
             
              
              await sendMail(mailOptions)
              await db.exec('insertUpdateParcel',{parcel_id:parcel.parcel_id,sender_details:parcel.sender_details,
                receiver_details:parcel.receiver_details,pick_up:parcel.pick_up,destination:parcel.destination,description:parcel.description,
                weight:parcel.weight,price:parcel.price,status:parcel.status})
              console.log('PARCEL DELIVERED SUCCESSFULLY');
          } catch (error:any) {
              console.log(error);
              
              
          }
      } )
  }
  

}
export default receiverParcelDeliveredEmail