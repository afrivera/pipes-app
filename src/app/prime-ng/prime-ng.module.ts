import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    RippleModule
  ]
})
export class PrimeNgModule { }
