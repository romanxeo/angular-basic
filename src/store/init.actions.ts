import { Action } from '@ngrx/store';
import {cardType} from "./init.reducer";

export enum actionsArray {
  increase = '[APP] increase',
  decrease = '[APP] decrease',
  addCardAction = '[APP] addCardAction'
}

export class CountIncreaseAction implements Action {
  readonly type = actionsArray.increase;
}

export class CountDecreaseAction implements Action {
  readonly type = actionsArray.decrease;
}

export class addCardAction implements Action {
  readonly type = actionsArray.addCardAction;
  constructor(public card: cardType) {}
}

export type actionType = CountIncreaseAction
  | CountDecreaseAction
  | addCardAction;
