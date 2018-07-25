import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngxs/store';
import { LoadUser } from './shared/states/User.state';

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
        iconRegistry.addSvgIcon('account_circle',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/account_circle-24px.svg'));
        iconRegistry.addSvgIcon('arrow_drop_down',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow_drop_down-24px.svg'));
        iconRegistry.addSvgIcon('clear',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-clear-24px.svg'));
        iconRegistry.addSvgIcon('exit_to_app',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/exit_to_app-24px.svg'));
        iconRegistry.addSvgIcon('link',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/link-24px.svg'));
        iconRegistry.addSvgIcon('menu',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu_24px.svg'));
        iconRegistry.addSvgIcon('more_vert',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/more_vert-24px.svg'));
        iconRegistry.addSvgIcon('person',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/person-24px.svg'));
        iconRegistry.addSvgIcon('supervisor_account',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/supervisor_account-24px.svg'));
        iconRegistry.addSvgIcon('supervised_user_circle',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/supervised_user_circle-24px.svg'));
        iconRegistry.addSvgIcon('search',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-search-24px.svg'));
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {

  }
}
