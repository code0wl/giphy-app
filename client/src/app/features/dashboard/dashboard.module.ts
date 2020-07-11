import { NgModule } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentModule } from 'app/components/component.module';
import { UtilitiesModule } from 'app/utilities/utilities.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [
    DashboardRoutes,
    BrowserModule,
    UtilitiesModule,
    ComponentModule,
    ScrollingModule
  ],
  exports: [DashboardComponent],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
