import { Component, Input, OnInit } from '@angular/core';
import { BookDetail } from '../book-detail.model';

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.scss']
})
export class BooksCardComponent implements OnInit {
[x: string]: any;
  @Input()
  result!: BookDetail;

  constructor() {}

  ngOnInit(): void {
   
  }
}
