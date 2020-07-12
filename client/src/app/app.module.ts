import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { DashboardModule } from 'client/src/app/features/dashboard/dashboard.module';
import { ComponentModule } from 'components/component.module';
import { DetailModule } from 'features/detail/detail.module';
import { LoaderInterceptor } from 'services/interceptor/interceptor.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    ComponentModule,
    HttpClientModule,
    DashboardModule,
    DetailModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
