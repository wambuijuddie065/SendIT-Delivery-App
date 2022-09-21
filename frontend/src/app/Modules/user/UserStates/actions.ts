import { Action, createAction, props } from '@ngrx/store';
import {
  SignupInterface,
  ParcelInterface,
} from 'src/app/Interfaces/interfaces';

export const SelectedId = createAction(
  'SelectedId',

  props<{ id: string }>()
);
export const email=createAction(
  'email',
  props<{email:string}>()
);

export const LoadSentParcels = createAction('LoadSentParcels');
export const LoadSentParcelsSuccess = createAction(
  'LoadSentParcelsSuccess',
  props<{ parcels: ParcelInterface[] }>()
);
export const LoadSentParcelsFail = createAction(
  'LoadSentParcelsFail',
  props<{ error: string }>()
)

export const LoadReceivedParcels = createAction('LoadReceivedParcels');
export const LoadReceivedParcelsSuccess = createAction(
  'LoadReceivedParcelsSuccess',
  props<{ parcels: ParcelInterface[] }>()
);
export const LoadReceivedParcelsFail = createAction(
  'LoadReceivedParcelsFail',
  props<{ error: string }>()
)
