import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from  '@angular/router'

import { StoreModule } from "@ngrx/store";
import { metaReducers, reducers } from "../store/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from "./app.effects";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderButtonComponent } from './header-button/header-button.component';
import { CardContentComponent } from './card-content/card-content.component';
import { EventItemComponent } from './event-item/event-item.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeButtonComponent } from './home-button/home-button.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'card/:id', component: CardComponent},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderButtonComponent,
    HomeComponent,
    CardComponent,
    NotFoundComponent,
    HomeButtonComponent,
    CardContentComponent,
    EventItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
