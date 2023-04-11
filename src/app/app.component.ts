import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Flipkart';

  constructor(private router: Router){}
  ngOnInit() {
    this.router.events.subscribe((evt) => {   //to scroll to top whenever route change
      if (evt instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
