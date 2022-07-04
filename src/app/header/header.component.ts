import { Component, OnInit } from '@angular/core';

export type buttonNavType = {
  title: string;
  message: string;
  link: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonArray: buttonNavType[] = [
    {title: 'Home', message: 'Message One', link: ''},
    {title: '404', message: 'Message Two', link: '/404'},
    {title: 'card One', message: 'Message Last', link: '/card/1'},
  ]

}
