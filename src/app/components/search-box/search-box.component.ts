import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { debounceTime, filter, fromEvent, map, switchAll, tap } from 'rxjs';
import { BookDetail } from '../../book-detail.model';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @Output() loading = new EventEmitter<boolean>();
  @Output() results = new EventEmitter<BookDetail[]>();

  constructor(private book: BooksService, private el: ElementRef) {}


  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value),
      filter(text => text.length > 1),
      debounceTime(500),
      tap(() => this.loading.emit(true)),
      map((query: string) => this.book.search(query)),
      switchAll()
    ).subscribe(
      _results => {
        this.loading.emit(false);
        this.results.emit(_results);
      },
      err => {
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      }
    );
  }
}
