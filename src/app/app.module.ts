import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from  '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderButtonComponent } from './header-button/header-button.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import {metaReducers, reducers} from "../store/store";
import {StoreModule} from "@ngrx/store";
import { CardContentComponent } from './card-content/card-content.component';

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
    CardContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
