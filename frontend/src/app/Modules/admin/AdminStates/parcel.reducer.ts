
import * as parcelActions from "./parcel.action"
import { ParcelInterface } from "src/app/Interfaces/interfaces"
import * as fromRoot from "../../../State/app-state"
import { createFeatureSelector, createSelector } from "@ngrx/store"

export interface ParcelState{
    parcels:ParcelInterface[] 
    loading:boolean
    loaded:boolean
    error:string
}
export interface AppState extends fromRoot.AppState{
    parcels:ParcelState
}

export const initialState:ParcelState= {
    parcels:[],
    loading:false,
    loaded:false,
    error:""
}



export function parcelReducer(state=initialState,action:parcelActions.Actions):ParcelState{
    switch(action.type){
        case parcelActions.ParcelActionTypes.LOAD_PARCELS:{
            return{
                ...state,
                loading:true,
                
            }
        }
        case parcelActions.ParcelActionTypes.LOAD_PARCELS_SUCCESS:{
            return{
                ...state,
                loading:false,
                loaded:true,
                parcels:action.payload
                
            }
        }
        case parcelActions.ParcelActionTypes.LOAD_PARCELS_FAIL:{
            return{
                ...state,
                parcels:[],
                loading:false,
                loaded:false,
                error:action.payload
                
            }
        }
        default:{
            return state
        }

    }

}

const getParcelFeatureState=createFeatureSelector<ParcelState>(
    "parcels"
)
export  const getParcels=createSelector(
    getParcelFeatureState,
    (state:ParcelState)=>state.parcels
)
export  const getParcelsloading=createSelector(
    getParcelFeatureState,
    (state:ParcelState)=>state.loading
)
export  const getParcelsLoaded=createSelector(
    getParcelFeatureState,
    (state:ParcelState)=>state.loaded
)
export  const getError=createSelector(
    getParcelFeatureState,
    (state:ParcelState)=>state.error
)