export interface ParcelInterface{
    id?:number
    user_id?:string
    sender_details:string
    receiver_details:string
    pick_up:string
    destination:string
    parcel_id:string
    description:string
    weight:string
    price?:string
    status:string
}
export interface LoginInterface{
    email:string
    password:string
    error?:string
    message?:string
    

}

export interface SignupInterface{
    id?:number
    name:string
    email:string
    contact:string
    password:string

    error:string
    message:string
    

}
export interface UpdateResponseInterface{
    message:string
}