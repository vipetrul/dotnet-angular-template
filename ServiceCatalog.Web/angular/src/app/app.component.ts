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
        iconRegistry.addSvgIcon('menu',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_menu_24px.svg'));
        
        //load user profile as soon as application starts
        store.dispatch(new LoadUser());
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {

  }
}
