import ejs from 'ejs'
import dotenv from 'dotenv'
import sendMail from '../Helpers/Email'
import { sqlConfig } from '../Config/Config'
import Connection from '../DatabaseHelpers/db'
const db=new Connection()

dotenv.config()

interface ClientInterface{
    client_id:string
    name:string
    email:string
    contact:string
    password:string
    role:string
    is_welcome:string

}

const sendWelcomeEmail=async()=>{
    console.log("welcome is working")
    

const clients:ClientInterface[]=await (await db.exec('getNotWelcome')).recordset




for (let client of clients){
    ejs.renderFile('Templates/welcome.ejs',{name:client.name},async (error,data)=>{
        let messageOption={
            from:process.env.EMAIL,
            to:client.email,
            subject:"Welcome To SendIT Delivery!",
            html:data,
            attachments:[
                {
                    filename:'sendIT.text',
                    content:`Dear: ${client.name}, this is to let you know that you have chosen the best parcel delivery service.`
                }
            ]
        }
        try {
            
            await sendMail(messageOption)
            await db.exec('updateWelcome',{email:client.email})
            console.log('client is welcome');
            
        } catch (error) {
            console.log(error);
            
        }
    })
}


}
export default sendWelcomeEmail