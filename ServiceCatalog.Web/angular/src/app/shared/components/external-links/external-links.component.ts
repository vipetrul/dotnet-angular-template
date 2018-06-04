import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'external-links',
  template: `
  <a mat-menu-item *ngFor="let externalLink of externalLinks" [href]="externalLink.Url"><mat-icon *ngIf="showIcons" svgIcon="link"></mat-icon>{{externalLink.Text}}</a>
  `,
  styles: []
})
export class ExternalLinksComponent implements OnInit {
  @Input() showIcons: boolean = false;
  externalLinks : ExternalLink[] = [
      new ExternalLink('Help Desk', 'https://its.uiowa.edu/contact'),
      new ExternalLink('Self Service', 'https://hris.uiowa.edu'),
  ];

  constructor() { }

  ngOnInit() {
  }

}

class ExternalLink {
  constructor (public Text: String, public Url: String){}
}