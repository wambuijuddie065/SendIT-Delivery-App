export interface ParcelInterface{
    user_id?:string
    sender_details:string
    receiver_details:string
    pick_up?:string
    destination?:string
    parcel_id:string
    description:string
    weight:string
    price?:string
    status:string
}
export interface LoginInterface{
    email:string
    password:string
    error:string
    message:string
    

}
export interface SignupInterface{
    name:string
    email:string
    password:string
    error:string
    message:string
    

}