
import { Action } from "@ngrx/store";
import { ParcelInterface } from "src/app/Interfaces/interfaces";

export enum ParcelActionTypes {
    LOAD_PARCELS="[ParcelInterface] Load Parcels",
    LOAD_PARCELS_SUCCESS="[ParcelInterface] Load Parcels Success",
    LOAD_PARCELS_FAIL="[ParcelInterface] Load Parcels Fail"
}

export class LoadParcels implements Action{
    readonly type=ParcelActionTypes.LOAD_PARCELS

}
export class LoadParcelsSuccess implements Action{
    readonly type=ParcelActionTypes.LOAD_PARCELS_SUCCESS
    constructor(public payload:ParcelInterface[]){}

}
export class LoadParcelsFail implements Action{
    readonly type=ParcelActionTypes.LOAD_PARCELS_FAIL
    constructor(public payload:string){}

}

export type Actions=LoadParcels | LoadParcelsSuccess  | LoadParcelsFail