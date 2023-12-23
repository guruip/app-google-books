import { Component, Input } from '@angular/core';
import { BookDetail } from '../../book-detail.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.scss']
})
export class BooksCardComponent {
  
  @Input()
  results!: BookDetail[];

  constructor(private bookService: BooksService) {}

  addFavorite(result: BookDetail): void {
    this.bookService.saveFavorite(result);
  };

  ngOnInit(): void {
   
  }
}
