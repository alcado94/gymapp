import { Component, OnInit} from '@angular/core';
import { Router, ActivationEnd, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  routes: String[] = ['Home'];
  axuRoute: String[] = [];

  constructor(private route: Router) {
    route.events.subscribe((val) => {
      if (val instanceof ActivationEnd && val.snapshot.data.info !== undefined) {
        this.setRoute(val.snapshot.data.info);
      }
      if (val instanceof NavigationEnd) {
        this.routes = this.getRoute();
        this.routes.reverse();
        this.axuRoute = [];
      }
    });
  }

  setRoute(snap) {
    this.axuRoute.push(snap);
  }

  getRoute() {
    return this.axuRoute.length !== 0 ? this.axuRoute : ['Home'];
  }

  ngOnInit() { }


}
