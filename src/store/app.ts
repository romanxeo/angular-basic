import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";

export enum actionsArray {
  addCardAction = '[APP] addCardAction',
  removeCardAction = '[APP] removeCardAction',
  addEventAction = '[APP] addEventAction',
  removeEventAction = '[APP] removeEventAction',
}

export const addCardAction = createAction(
  actionsArray.addCardAction,
  props<{ card: cardType }>()
)

export const removeCardAction = createAction(
  actionsArray.removeCardAction,
  props<{ cardId: string }>()
)

export const addEventAction = createAction(
  actionsArray.addEventAction,
  props<{ cardId: string, event: eventType }>()
)

export const removeEventAction = createAction(
  actionsArray.removeEventAction,
  props<{ cardId: string, eventId: string }>()
)


//===================================================================================================================


export type eventType = {
  id: string;
  title: string;
  type: string;
}

export type cardType = {
  id: string;
  title: string;
  description: string;
  eventsArray: eventType[];
}

export type initStateType = {
  cardsArray: cardType[];
  cardsCount: number;
}

export const initState: initStateType = {
  cardsArray: [
    {
      id: '1',
      title: 'title1',
      description: 'desc1',
      eventsArray: [
        {
          id: '1',
          title: 'title1',
          type: 'add'
        },
        {
          id: '2',
          title: 'title2',
          type: 'add'
        },
      ],
    },
    {
      id: '2',
      title: 'title2',
      description: 'desc2',
      eventsArray: [],
    },
  ],
  cardsCount: 2,
};

export const appReducer = createReducer(
  initState,
  on(addCardAction, (state, action) => {
    let copyState = JSON.parse(JSON.stringify(state))
    copyState.cardsArray = [...copyState.cardsArray, action.card]
    return copyState
  }),
  on(removeCardAction, (state, action) => {
    let copyState = JSON.parse(JSON.stringify(state))
    copyState.cardsArray = copyState.cardsArray.filter((card: cardType) => card.id !== action.cardId)
    return copyState
  }),
  on(addEventAction, (state, action) => {
    let copyState = JSON.parse(JSON.stringify(state))
    copyState.cardsArray = copyState.cardsArray.map((card: cardType) => {
      if (card.id === action.cardId) {
        return {...card, eventsArray: [...card.eventsArray, action.event]}
      } else {
        return card
      }
    })
    return copyState
  }),
  on(removeEventAction, (state, action) => {
    let copyState = JSON.parse(JSON.stringify(state))
    copyState.cardsArray = copyState.cardsArray.map((card: cardType) => {
      if (card.id === action.cardId) {
        card.eventsArray = card.eventsArray.filter(event => event.id !== action.eventId)
      }
      return card
    })
    return copyState
  }),
);


//==================================================================================================================

export const APP_KEY = 'app'

export const featureSelector = createFeatureSelector<initStateType>(APP_KEY);

export const cardsArraySelector = createSelector(
  featureSelector,
  (state: initStateType): cardType[] => state.cardsArray
);

export const cardSelector = createSelector(
  featureSelector,
  (state: initStateType, cardId: string | null): cardType => {
    let card = state.cardsArray.find(card => card.id === cardId)
    return card as cardType
    //console.log(card)
    //return state.cardsArray[0]
  }
)
