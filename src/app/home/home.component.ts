import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import {Observable} from "rxjs";
import {v1} from "uuid";
import {addCardAction, cardsArraySelector, cardType} from "../../store/app";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cardsArray$: Observable<cardType[]> = this.store.select(cardsArraySelector);

  constructor(private store: Store) {}

  ngOnInit(): void {
  }

  async addCard () {
    const card: cardType = {
      id: v1(),
      title: 'New Title 1',
      description: 'New Description 1',
      eventsArray: [],
    }
    this.store.dispatch(addCardAction({card}));
  }

}
