import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'w3earth-app';
  loading: boolean = true;

  constructor() {
    setTimeout(() => {
      this.loading = false
    }, 10000)
  }
}
