import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {cardType, initStateType} from "../../store/init.reducer";
import {selectorCardsArray, selectorCardsCount} from "../../store/init.selectors";
import {addCardAction} from "../../store/init.actions";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cardsArray$: Observable<cardType[]> = this.store$.pipe(select(selectorCardsArray));
  public cardsCount$: Observable<number> = this.store$.pipe(select(selectorCardsCount));

  constructor(private store$: Store<initStateType>) {}

  ngOnInit(): void {
  }

  async addCard () {

    const card: cardType = {
      title: 'New Title 1',
      description: 'New Desription 1',
      eventsArray: [],
    }

    this.store$.dispatch(new addCardAction(card));
  }

}
