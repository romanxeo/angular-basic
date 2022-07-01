import {Component, Input, OnInit} from '@angular/core';
import {cardType} from "../../store/init.reducer";

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {

  @Input() card: any | undefined | cardType

  constructor() { }

  ngOnInit(): void {
  }

}
