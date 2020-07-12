import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ComponentModule } from 'app/components/component.module';
import { UtilitiesModule } from 'app/utilities/utilities.module';
import { DetailComponent } from './detail.component';
import { DetailRoutes } from './detail.routing';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    ComponentModule,
    DetailRoutes,
    UtilitiesModule
  ],
  exports: [DetailComponent],
  declarations: [DetailComponent]
})
export class DetailModule { }
