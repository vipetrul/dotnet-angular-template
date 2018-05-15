import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngxs/store';
import { LoadUser } from './core/states/User.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isSmall = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]);

  constructor(
      private breakpointObserver: BreakpointObserver, 
      iconRegistry: MatIconRegistry, 
      sanitizer: DomSanitizer,
      store: Store) {
        //register material svg icons
        iconRegistry.addSvgIcon('menu',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu_24px.svg'));
        iconRegistry.addSvgIcon('person',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/person-24px.svg'));
        iconRegistry.addSvgIcon('arrow_drop_down',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow_drop_down-24px.svg'));
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {

  }
}
