import { Injectable } from "@angular/core";
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';
import {  Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { SignupService } from '../../../Services/signup.service'
import * as clientActions from './client.actions'


@Injectable()
export class ClientEffects {
  constructor(private actions$: Actions,private signupService:SignupService) {}

  addClient = createEffect(() => {
    return this.actions$.pipe(
      ofType(clientActions.RegisterClient),
      mergeMap((action) =>
        this.signupService.signUp(action.newClient).pipe(
          map((res) =>
          clientActions.RegisterClientSuccess({ addClientMessage: res.message })
          ),
          catchError((error) =>
            of(clientActions.RegisterClientFailure({ error: error }))
          )
        )
      )
    );
  });
}

