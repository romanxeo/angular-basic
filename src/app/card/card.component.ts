import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Observable} from "rxjs";
import {cardType, initStateType} from "../../store/init.reducer";
import {select, Store} from "@ngrx/store";
import {selectorCard} from "../../store/init.selectors";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public cardId = 0
  public card$: Observable<cardType> = this.store.pipe(select(selectorCard, this.cardId));

  constructor(
    private store: Store<initStateType>,
    private ActivatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.cardId = Number(this.ActivatedRoute.snapshot.paramMap.get("id"));
    this.card$ = this.store.pipe(select(selectorCard, this.cardId));
  }
}
