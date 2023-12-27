import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public loading!: boolean;
  public message = '';


  // updateResults(results: BookDetail[]): void {
  //   this.results = results;
  //   if (this.results.length === 0) {
  //     this.message = 'Notfound...';
  //   } else {
  //     this.message = 'Top 10results:';
  //   }
  // }
 
}
