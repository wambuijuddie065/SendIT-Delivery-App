import { createAction, createFeatureSelector, createReducer, props, on } from "@ngrx/store"
import { SignupInterface } from "src/app/Interfaces/interfaces"
import * as fromRoot from "../../../State/app-state"
import * as clientActions from '../authStates/client.actions'

export interface ClientState{
    client_id:string
    clients:SignupInterface[] 
    addClientMessage:string
    error:string
    clientError:string
}
export interface AppState extends fromRoot.AppState{
    clients:ClientState
}
export const initialState:ClientState= {
    client_id:'',
    clients:[],
    addClientMessage:"",
    error:"",
    clientError:""}

    const getClientsFeatureState=createFeatureSelector<ClientState>(
        "clients"
    )


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


  export const clientReducer=createReducer(initialState,
    on(clientActions.RegisterClientSuccess,(state,action):ClientState=>{
        return{...state, addClientMessage:action.addClientMessage}
    }),
    on(clientActions.RegisterClientFailure,(state,action):ClientState=>{
        return{...state, error:action.error}
    
    }),
    )