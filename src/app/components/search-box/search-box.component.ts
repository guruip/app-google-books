import { Component, ElementRef } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { debounceTime, filter, fromEvent, map, switchAll } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  constructor(private booksService: BooksService, private el: ElementRef) {}

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value),
      filter(text => text.length > 1),
      debounceTime(500),
      map((query: string) => this.booksService.search(query)),
      switchAll()
    ).subscribe(
      books => {
        this.booksService.booksSource = books;
      }
    );
  }
}
