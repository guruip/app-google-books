import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteBooksComponent } from './favorite-books/favorite-books.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'favorite', component: FavoriteBooksComponent },

    { path: '**', redirectTo: "", component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
