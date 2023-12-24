import { Component } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { 

  constructor(private bookService: BooksService) {}

  addFavorites() {
  }
}
