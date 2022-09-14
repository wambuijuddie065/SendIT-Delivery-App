export interface Client{
    client_id:string
    name?:string
    email:string
    contact?:string
    password:string
    role:string
}



export interface Data{
    client_id:string
    email:string
    contact:string
    name:string
    role:string
    iat:number
    exp:number
}