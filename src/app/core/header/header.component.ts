import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private router: Router,private route: ActivatedRoute) {}

  childRoute: string;
  subscribtion: Subscription;

  ngOnInit() {
    this.subscribtion = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      map(route => route.url)
    )
    .subscribe((e) => {
      if (this.route.snapshot.firstChild.url[0] !== undefined) {
        this.childRoute = this.route.snapshot.firstChild.url[0].path
      }else{
        this.childRoute = 'home'
      }
    })
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe()
  }

}
