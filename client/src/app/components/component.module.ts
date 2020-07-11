import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilitiesModule } from 'app/utilities/utilities.module';
import { GiphyComponent } from './giphy/giphy.component';
import { LoaderComponent } from './loader/loader.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';

const components = [
  LoaderComponent,
  GiphyComponent,
  SearchComponent,
  PaginationComponent
];

@NgModule({
  imports: [CommonModule, UtilitiesModule, RouterModule],
  exports: components,
  declarations: components
})
export class ComponentModule {}
