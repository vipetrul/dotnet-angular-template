import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  template: `
  <div fxLayout fxLayoutAlign="start center" style="border:1px solid rgb(195, 195, 195); border-radius: 5px; padding: 6px 8px 4px 8px; background-color: white">
    <mat-icon aria-label="Find Services" svgIcon="search"></mat-icon>  
    <input  #searchref
            fxFlex
            class="mat-body-2" 
            style="border:none; outline:none; margin-left: 0.3em; font-size:16px;" 
            placeholder="Search Services"
            />
    <button *ngIf="searchref.value" (click)="reset()" class="transparent" style="padding:0; height:24px; color: #3f51b5">
      <mat-icon aria-label="Clear search" svgIcon="clear"></mat-icon>
    </button>
  </div>
  `,
  styles: [
  `button.transparent {
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
}`]
})
export class SearchInputComponent implements OnInit {
  @Output() textEntered = new EventEmitter<string>();
  @ViewChild('searchref')  searchRef:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var eventObservable = fromEvent( this.searchRef.nativeElement, 'input')
    .pipe(
      map((evt: any) => evt.target.value), //get input value
      //filter(res => res.length > 2), //text length should be more than 2 chars
      debounceTime(1000),
      distinctUntilChanged() //only emit if data changed since last emit
    ).subscribe((text: string) => this.textEntered.emit(text));
  }

  reset(){
    this.searchRef.nativeElement.value = ''; 
    this.searchRef.nativeElement.dispatchEvent(new Event('input'));
  }
}
