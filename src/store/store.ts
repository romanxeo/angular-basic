import {
  ActionReducerMap, MetaReducer
} from '@ngrx/store';

import { environment } from '../environments/environment';
import {appReducer, initStateType} from './init.reducer';

export interface State {
  app: initStateType;
}

export const reducers: ActionReducerMap<State, any> = {
  app: appReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];




/*
import {createReducer, createAction, on, props, createSelector, createFeatureSelector} from "@ngrx/store";

//export const clearCards = createAction('clear_cards')
export const addCard = createAction('add_card', props<cardType>())
export const removeCard = createAction('remove_card', props<cardType>())



export const initState: initStateType = {
  cardsArray: [
    {
      id: 1,
      title: 'title1',
      description: 'desc1',
      eventsArray: [],
    },
    {
      id: 2,
      title: 'title2',
      description: 'desc2',
      eventsArray: [],
    },
  ],
  cardsCount: 2,
}

export const initReducer  = createReducer(
  initState,
  on (addCard, (state: initStateType, card: cardType) => {
    const copyState = {...state}
    copyState.cardsCount = copyState.cardsCount+1
    let addCard: cardType = {...card, id: copyState.cardsCount}
    copyState.cardsArray = [...copyState.cardsArray, addCard]
    return copyState
  }),

  on (removeCard, (state:initStateType, card: cardType) => {
    const copyState = {...state}
    copyState.cardsArray = copyState.cardsArray.filter(e => e.id !== card.id)
    return copyState
  })
)

export const cardsArraySelector = createSelector(
  createFeatureSelector('initReducer'),
  (state: initStateType) => {
    return state.cardsArray
  }
)
*/


