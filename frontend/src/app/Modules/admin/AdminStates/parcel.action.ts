import { Action, createAction, props } from '@ngrx/store';
import { ParcelInterface } from 'src/app/Interfaces/interfaces';

export const LoadParcels = createAction('LoadParcels');
export const SelectedId=createAction('SelectedId',
 
props<{id:number}>())
export const LoadParcelsSuccess = createAction(
  'LoadParcelsSuccess',
  props<{ parcels: ParcelInterface[] }>()
);
export const LoadParcelsFail = createAction(
  'LoadParcelsFail',
  props<{ error: string }>()
);
export const AddParcel=createAction(
    'AddParcel',
    props<{newParcel:ParcelInterface}>()
)
export const AddParcelSuccess=createAction(
    'AddParcelSuccess',
    props<{addParcelMessage:string}>()
)
export const AddParcelFail=createAction(
    'AddParcelFail',
    props<{error:string}>()
)
export const UpdateParcel=createAction(
    'UpdateParcel',
    props<{updatedParcel:ParcelInterface}>()
)
export const UpdateParcelSuccess=createAction(
    'UpdateParcelSuccess',
    props<{updateParcelMessage:string}>()
)
export const UpdateParcelFail=createAction(
    'UpdateParcelFail',
    props<{error:string}>()
)
export const DeleteParcel=createAction(
    'DeleteParcel',
    props<{id:number}>()
)
export const DeleteParcelSuccess=createAction(
    'DeleteParcelSuccess',
    props<{deleteParcelMessage:string}>()
)
export const DeleteParcelFail=createAction(
    'DeleteParcelFail',
    props<{error:string}>()
)