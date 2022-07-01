import { actionType, actionsArray } from './init.actions';

export type eventType = {
  id: number;
  title: string;
  type: string;
}

export type cardType = {
  id?: number;
  title: string;
  description: string;
  eventsArray: eventType[];
}

export type initStateType = {
  cardsArray: cardType[],
  cardsCount: number
}

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
};

export const appReducer = (state: initStateType = initState, action: actionType): initStateType => {
  switch (action.type) {
    case actionsArray.increase:
      return {
        ...state,
        cardsCount: state.cardsCount + 1
      };
    case actionsArray.decrease:
      return {
        ...state,
        cardsCount: state.cardsCount - 1
      };

    case actionsArray.addCardAction:
      let copyState = {...state}
      copyState.cardsCount = copyState.cardsCount+1
      let card = {...action.card, id: copyState.cardsCount}
      copyState.cardsArray = [...copyState.cardsArray, card]
      return copyState;
    default:
      return state;
  }
}
