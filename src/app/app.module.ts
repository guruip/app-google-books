import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { BooksCardComponent } from './components/books-card/books-card.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FavoriteBooksComponent } from './components/favorite-books/favorite-books.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksCardComponent,
    SearchBoxComponent,
    FavoriteBooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
