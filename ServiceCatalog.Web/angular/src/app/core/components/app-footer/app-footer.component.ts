import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFooterComponent implements OnInit {
  year = 0;
  emailLinkText = 'Business Services IT';
  emailDistributionList = 'FBIS-DL_Developer-Parking@iowa.uiowa.edu';
  emailSubject = 'Questions about the ServiceCatalog Website';
  emailHref: string;
  constructor() {}

  ngOnInit() {
    const today = new Date();
    this.year = today.getFullYear();
    this.emailHref = `mailto:${
      this.emailDistributionList
    }?subject=${this.emailSubject.replace(' ', '%20')}`;
  }
}
