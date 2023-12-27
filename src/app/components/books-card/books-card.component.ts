import { Component, Input } from '@angular/core';
import { BookDetail } from '../../book-detail.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.scss']
})
export class BooksCardComponent {

  get books$() {
    return this.booksService.booksSource;
  }

  constructor(private booksService: BooksService) {}

  addFavorite(book: BookDetail): void {
    this.booksService.saveFavorite(book);
  };

  ngOnInit(): void {
  }
}
