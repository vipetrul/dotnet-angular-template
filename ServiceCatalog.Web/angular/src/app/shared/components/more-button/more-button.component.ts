import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'more-button',
  template: `
  <a mat-button mat-icon-button [matMenuTriggerFor]="userMenu">
    <mat-icon svgIcon="more_vert"></mat-icon>
  </a>

  <mat-menu #userMenu="matMenu" overlapTrigger="false">
    <external-links [showIcons]="true" class="externalLinks"></external-links>
  </mat-menu>
  `,
  styles: [
  ]
})
export class MoreButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
