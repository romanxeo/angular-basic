import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Observable} from "rxjs";
import {cardSelector, cardType, initStateType} from "../../store/app";
import {select, Store} from "@ngrx/store";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public cardId: string = String(this.ActivatedRoute.snapshot.paramMap.get("id"));
  public card$: Observable<cardType> = this.store.pipe(select(cardSelector, this.cardId));

  constructor(
    private store: Store<initStateType>,
    private ActivatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }
}
