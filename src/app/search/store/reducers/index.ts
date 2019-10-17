import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { SEARCH_REQUEST } from '../actions';

export class State {}

export const searchFeatureKey = 'search';


export function reducer(state, action) {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
