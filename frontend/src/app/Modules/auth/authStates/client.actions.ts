
import { Action, createAction, props } from '@ngrx/store';
import { SignupInterface } from "src/app/Interfaces/interfaces";



export const RegisterClient = createAction(
  'RegisterClient',
  props<{ newClient: SignupInterface }>()
);
export const RegisterClientSuccess = createAction(
  'RegisterClientSuccess',
  props<{ addClientMessage: string }>()
);
export const RegisterClientFailure = createAction(
  'RegisterClientFailure',
  props<{ error: string }>()
);