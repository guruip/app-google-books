import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { BookDetail } from '../book-detail.model';
import { BooksApiResponse, BooksApiResponseItem } from '../books.types';
import { mockBooksData } from '../data';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  get booksSource(): Observable<BookDetail[]> {
    return this.booksSource$.asObservable();
  }

  set booksSource(value: BookDetail[]) {
    this.booksSource$.next(value);
  }
  
  public result: boolean = false;

  private mockBooks: BookDetail[] = mockBooksData;

  private readonly booksSource$ = new BehaviorSubject<BookDetail[]>(this.mockBooks);
  
  private readonly BOOKS_API_URL: string = 'https://www.googleapis.com/books/v1/volumes';

  private readonly BOOKS_LOCALSTORAGE_KEY = 'favoriteBooks';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<BookDetail[]> {
    const params: string = `q=${query}`;

    const queryUrl = `${this.BOOKS_API_URL}?${params}`;

    return this.http.get<any>(queryUrl).pipe(map((response: BooksApiResponse) => {
      return response.items.map((item: BooksApiResponseItem) => {
        return BookDetail.fromApi(item);
      });
    }));
  }

  public getFavorites(): BookDetail[] {
    const booksJson = localStorage.getItem(this.BOOKS_LOCALSTORAGE_KEY) ?? '[]';
    const books: any[] = JSON.parse(booksJson);

    return books.map((item) => new BookDetail(item));
  };
  
  public saveFavorite(book: BookDetail): void {

    if(book.isFavorite) {
      const books = this.getFavorites();
      books.push(book);

      const booksJson = JSON.stringify(books);
      localStorage.setItem(this.BOOKS_LOCALSTORAGE_KEY, booksJson);
    }
  };

  public removeFavorite(book: BookDetail): void {
    const books = this.getFavorites();

    for (let i = 0; i < books.length; i++) {
      if (books[i].id === book.id) {
          books.splice(i, 1);
      }
    };
    
    const booksJson = JSON.stringify(books);
    localStorage.setItem(this.BOOKS_LOCALSTORAGE_KEY, booksJson);
  }

  public addFavoriteBooks(): void {
    this.booksSource = this.getFavorites();
  }  

}
