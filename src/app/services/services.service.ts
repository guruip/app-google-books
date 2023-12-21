import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BookDetail } from '../book-detail.model';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public readonly BOOK_API_URL: string = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<BookDetail[]> {
    const params: string = `q=${query}`;

    const queryUrl = `${this.BOOK_API_URL}?${params}`;

    return this.http.get<any>(queryUrl).pipe(map(response => {
      return response['items'].map((item: {volumeInfo: {title: any; infoLink: any; imageLinks: {thumbnail: any; } | undefined;}; }) => {
        return new BookDetail({
          title: item.volumeInfo.title,
          infoLink: item.volumeInfo.infoLink,
          imageLinks: item.volumeInfo.imageLinks != undefined? item.volumeInfo.imageLinks.thumbnail: ""
        });
      });
    }));
  }
}
