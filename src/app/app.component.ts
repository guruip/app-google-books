import { Component } from '@angular/core';
import { BookDetail } from './book-detail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public results!: BookDetail[];
  public loading!: boolean;
  public message = '';


  updateResults(results: BookDetail[]): void {
    this.results = results;
    if (this.results.length === 0) {
      this.message = 'Notfound...';
    } else {
      this.message = 'Top 10results:';
    }
  }
  
}
