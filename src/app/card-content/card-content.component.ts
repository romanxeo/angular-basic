import {Component, Input,} from '@angular/core';
import {cardType, eventType, initStateType} from "../../store/app";
import {addEventAction} from "../../store/app";
import {v1} from "uuid";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent {

  @Input() cardId!: string
  @Input() card!: cardType | null

  constructor(private store: Store<initStateType>) {}

  async addEvent (type: string) {
    const event: eventType = {
      id: v1(),
      title: `New ${type}`,
      type
    }
    this.store.dispatch(addEventAction({cardId: this.card?.id as string, event}));
  }

}
