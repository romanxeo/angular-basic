import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../environments/environment';
import {APP_KEY, appReducer, initStateType} from "./app";

export interface State {
  [APP_KEY]: initStateType
}

export const reducers: ActionReducerMap<State, any> = {
  [APP_KEY]: appReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
