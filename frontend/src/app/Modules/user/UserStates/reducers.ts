import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import { ParcelInterface, SignupInterface } from "src/app/Interfaces/interfaces"
import * as fromRoot from "../../../State/app-state"
import { Actions } from "@ngrx/effects"
import * as parcelActions from "./actions"
export interface ParcelState{
    parcel_id:string
    parcels:ParcelInterface[] 
    parcelError:string
    error:string
    clientError:string
    email:string
  
}
export interface AppState extends fromRoot.AppState{
    parcels:ParcelState
}
export const initialState:ParcelState={
    parcel_id:'',
    parcels:[] ,
    parcelError:'',
    error:'',
    clientError:'',
    email:''

    
}
const getParcelFeatureState=createFeatureSelector<ParcelState>(
    "ClientParcels"
)
export  const getparcel_id=createSelector(
    getParcelFeatureState,
    (state:ParcelState)=>state.parcel_id
)
export  const getParcel =createSelector(
    getParcelFeatureState,
    getparcel_id,
    (state,id )=>state.parcels.find(parcel=>parcel.parcel_id==id)
)

export  const getEmail=createSelector(
    getParcelFeatureState,
    (state:ParcelState)=>state.email
)
export  const getSentParcel =createSelector(
    getParcelFeatureState,
    getEmail,
    (state,email )=>state.parcels.filter(parcel=>parcel.sender_details==email)
)
export  const getReceivedParcel =createSelector(
    getParcelFeatureState,
    getEmail,
    (state,email )=>state.parcels.filter(parcel=>parcel.receiver_details==email)
)
export  const getError=createSelector(
    getParcelFeatureState,
    (state:ParcelState)=>state.error
)
export const userReducer=createReducer(initialState,
    on(parcelActions.LoadSentParcelsSuccess,(state,action):ParcelState=>{
        return {...state,parcels:action.parcels}
    }),
    on(parcelActions.LoadSentParcelsFail,(state,action):ParcelState=>{
        return {...state,error:action.error}
    }),
    on(parcelActions.LoadReceivedParcelsSuccess,(state,action):ParcelState=>{
        return {...state,parcels:action.parcels}
    }),
    on(parcelActions.LoadReceivedParcelsFail,(state,action):ParcelState=>{
        return {...state,error:action.error}
    }),
    on(parcelActions.SelectedId,(state,action):ParcelState=>{
        return {...state,parcel_id:action.id}
    }),
    on(parcelActions.email,(state,action):ParcelState=>{
        return {...state,email:action.email}

    })
    
    )


