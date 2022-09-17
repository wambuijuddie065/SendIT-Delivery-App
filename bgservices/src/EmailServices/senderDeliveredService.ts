// import ejs from 'ejs'
// import dotenv from 'dotenv'
// import sendMail from '../Helpers/Email'
// import { sqlConfig } from '../Config/Config'
// import Connection from '../DatabaseHelpers/db'
// const db=new Connection()

// dotenv.config()

// interface ParcelInterface{
//     parcel_id:string,
//     sender_details:string
//     receiver_details:string
//     pick_up:string
//     destination:string
//     description:string
//     weight:number
//     price:number
//     status:string
//     is_dispatched:string
//     is_delivered:string
//     is_cancelled:string
// }
// const senderParcelDeliveredEmail=async()=>{
    
//     const parcels: ParcelInterface[]= await (await db.exec('getSenderUndeliveredParcels')).recordset
//     console.log("below are sender parcels",parcels);
    
//   for(let parcel of parcels){
//       ejs.renderFile('Templates/delivered.ejs',{parcel_id:parcel.parcel_id,sender_details:parcel.sender_details,
//         receiver_details:parcel.receiver_details,pick_up:parcel.pick_up,destination:parcel.destination,description:parcel.description,
//         weight:parcel.weight,price:parcel.price
//       },async(error,data)=>{
//           let mailOptions={
//               from:process.env.EMAIL,
//               to:parcel.sender_details,
//               subject:'Parcel delivered successfully',
//               html:data,
//               attachments:[
//                   {
//                       filename:'sendIT.txt',
//                       content:`Your have successfully delivered a parcel to  : ${parcel.receiver_details}`
//                   }
//               ]
//           }
//           try {
             
              
//               await sendMail(mailOptions)
//               await db.exec('senderDeliveredParcel',{parcel_id:parcel.parcel_id})
//               console.log('PARCEL DELIVERED SUCCESSFULLY');
//           } catch (error:any) {
//               console.log(error);
              
              
//           }
//       } )
//   }
  

// }
// export default senderParcelDeliveredEmail