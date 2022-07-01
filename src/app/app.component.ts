import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {selectorCardsArray, selectorCardsCount} from 'src/store/init.selectors';
import {cardType, initStateType} from "../store/init.reducer";
import {CountDecreaseAction, CountIncreaseAction} from "../store/init.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public cardsCount$: Observable<number> = this.store$.pipe(select(selectorCardsCount));
  public cardsArray$: Observable<cardType[]> = this.store$.pipe(select(selectorCardsArray));

  constructor(private store$: Store<initStateType>) {
  }

  increase() {
    this.store$.dispatch(new CountIncreaseAction());
  }

  decrease() {
    this.store$.dispatch(new CountDecreaseAction());
  }

}
