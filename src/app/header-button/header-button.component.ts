import {Component, Input, OnInit} from '@angular/core';
import {buttonNavType} from "../header/header.component";

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent implements OnInit {

  @Input() button: buttonNavType | undefined

  constructor() {

  }

  ngOnInit(): void {
  }

}
