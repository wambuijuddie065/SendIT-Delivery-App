export interface ParcelInterface{
    parcel_id:string
    sender_details:string
    receiver_details:string
    pick_up:string
    destination:string
    description:string
    weight?:number | string
    price?:number | string
    status:string
    sender_name?:string
    receiver_name?:string
    sender_contact?:string
    receiver_contact?:string
}

export interface LoginInterface{
    client_id:string
    name:string
    email:string
    password:string
    error:string
    message:string
    token:string
    role:string
    

}

export interface SignupInterface{
    client_id?:string
    
    name:string
    email:string
    contact:string
    password:string
    role?:string
    is_welcome?:string
    error:string
    message:string
    token?:string

    

}

export interface CheckClient{
    client_id:string
    name:string
    email:string
    role:string
}
export interface UpdateResponseInterface{
    message:string
}
