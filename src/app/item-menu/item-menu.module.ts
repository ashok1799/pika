import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { McqComponent } from './mcq/mcq.component';

import { ItemmenuRoutingModule } from './itemmenu-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ItemmenuRoutingModule,
    ChartsModule,
    DropdownModule
  ],
  declarations: [McqComponent]
})
export class ItemMenuModule { }
