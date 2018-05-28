import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { faBars } from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';
fontawesome.library.add(faBars);

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [],
  exports: [
    CommonModule, 
    FormsModule, 
    FlexLayoutModule,
    MaterialModule
  ],
})
export class SharedModule { }
