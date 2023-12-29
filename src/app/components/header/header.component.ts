import { Component } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { 

  constructor(private booksService: BooksService) {}

  public result: boolean = false;

  public clearFavorites(): void {
    this.result = false;
    this.booksService.result = false;

    localStorage.clear();
    this.booksService.addFavoriteBooks();
  }

  public addFavorites(): void {
    this.result = true;
    this.booksService.result = true;
    this.booksService.addFavoriteBooks();
  }
}
