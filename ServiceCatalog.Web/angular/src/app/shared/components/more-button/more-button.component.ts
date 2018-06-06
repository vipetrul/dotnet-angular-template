import { Component, OnInit } from '@angular/core';
import { ExternalLinksState, ExternalLink } from '../../states/ExternalLinks.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'more-button',
  template: `
  <a mat-button mat-icon-button [matMenuTriggerFor]="userMenu">
    <mat-icon svgIcon="more_vert"></mat-icon>
  </a>

  <mat-menu #userMenu="matMenu" overlapTrigger="false">
    <a mat-menu-item *ngFor="let externalLink of externalLinks$ | async" [href]="externalLink.Url"><mat-icon svgIcon="link"></mat-icon>{{externalLink.Text}}</a>
  </mat-menu>
  `,
  styles: [
  ]
})
export class MoreButtonComponent implements OnInit {
  @Select(ExternalLinksState) externalLinks$ : Observable<ExternalLink[]>;

  constructor() { }

  ngOnInit() {
  }

}
