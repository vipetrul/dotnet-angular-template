import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  applicationName = 'ServiceCatalog';
  isHandset = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private breakpointObserver: BreakpointObserver, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    //register material svg icons
    iconRegistry.addSvgIcon('menu',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_menu_24px.svg'));
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {

  }
}
