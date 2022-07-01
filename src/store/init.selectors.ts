import { createFeatureSelector, createSelector } from '@ngrx/store';
import {cardType, initStateType} from './init.reducer';

export const selectCountFeature = createFeatureSelector<initStateType>('app');

export const selectorCardsCount = createSelector(
  selectCountFeature,
  (state: initStateType): number => state.cardsCount
);

export const selectorCardsArray = createSelector(
  selectCountFeature,
  (state: initStateType): cardType[] => state.cardsArray
);

export const selectorCard = createSelector(
  selectCountFeature,
  (state: initStateType, cardId: number): cardType => {
    return state.cardsArray[cardId-1]
  }
)
