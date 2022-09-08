
import * as parcelActions from "./parcel.action"
import { ParcelInterface } from "src/app/Interfaces/interfaces"
import * as fromRoot from "../../../State/app-state"
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import { Actions } from "@ngrx/effects"
import { state } from "@angular/animations"

export interface ParcelState{
    parcelId:string
    parcels:ParcelInterface[] 
    addParcelMessage:string
    updateParcelMessage:string
    deleteParcelMessage:string
    parcelError:string
    error:string
    

}
export interface AppState extends fromRoot.AppState{
    parcels:ParcelState
}

export const initialState:ParcelState= {
    parcelId:"",
    parcels:[],
    addParcelMessage:"",
    updateParcelMessage:"",
    deleteParcelMessage:"",
    parcelError:"",
   
    error:""}


    const getParcelFeatureState=createFeatureSelector<ParcelState>(
        "parcels"
    )
    export  const getParcels=createSelector(
        getParcelFeatureState,
        (state:ParcelState)=>state.parcels
    )
    export  const getParcelId=createSelector(
        getParcelFeatureState,
        (state:ParcelState)=>state.parcelId
    )
    export  const getParcel =createSelector(
        getParcelFeatureState,
        getParcelId,
        (state,id )=>state.parcels.find(parcel=>parcel.parcel_id===id)
    )
    export  const getError=createSelector(
        getParcelFeatureState,
        (state:ParcelState)=>state.error
    )




export const parcelReducer=createReducer(initialState,
    on(parcelActions.LoadParcelsSuccess,(state,action):ParcelState=>{
        return {...state,parcels:action.parcels}
    }),
    on(parcelActions.LoadParcelsFail,(state,action):ParcelState=>{
        return {...state,error:action.error}
    })
    )

