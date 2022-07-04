import {Component, Input, OnInit} from '@angular/core';
import {eventType, initStateType} from "../../store/app";
import {removeEventAction} from "../../store/app";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  @Input() itemEvent!: eventType;
  @Input() cardId?: string;

  constructor(private store$: Store<initStateType>) {}

  ngOnInit(): void {
  }

  removeEvent () {
    this.store$.dispatch(removeEventAction({cardId: this.cardId as string, eventId: this.itemEvent.id}));
  }

}
