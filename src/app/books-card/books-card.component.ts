import { Component, Input } from '@angular/core';
import { BookDetail } from '../book-detail.model';

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.scss']
})
export class BooksCardComponent {
  
  @Input()
  results!: BookDetail[];

  constructor() {}

  ngOnInit(): void {
   
  }
}
