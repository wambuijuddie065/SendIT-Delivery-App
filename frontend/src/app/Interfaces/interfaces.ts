export interface ParcelInterface{
    id?:string
    from:string
    to:string
    email:string
    contact:string
    delivery:string
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