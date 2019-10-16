import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { AUTH_USER_LOGGED_IN } from '../actions';

export class State {}

export const authFeatureKey = 'auth';


export function reducer(state, action) {
  switch (action.type) {
    case AUTH_USER_LOGGED_IN:
      return {
        ...state,
        userLoggedIn: action.payload
      };
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
