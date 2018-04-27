import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from '@fbis/spinner';


@NgModule({
  imports: [CommonModule, FormsModule, SpinnerModule],
  declarations: [],
  exports: [CommonModule, FormsModule, SpinnerModule],
})
export class SharedModule { }
