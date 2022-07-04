import {Component, Input, OnInit} from '@angular/core';
import {removeCardAction} from "../../store/app";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss']
})
export class HomeButtonComponent implements OnInit {

  @Input() cardId!: string
  @Input() title!: string

  constructor(private store: Store) {}

  ngOnInit(): void {
  }

  removeCard () {
    this.store.dispatch(removeCardAction({cardId: this.cardId}));
  }
}
