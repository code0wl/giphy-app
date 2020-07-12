import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  pluck,
  share,
  switchMap,
} from 'rxjs/operators';

import { IGiphyPayload } from 'client/src/app/models/giphy/giphy.model';
import { GiphyService } from 'client/src/app/services/giphy/giphy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  $getGifs: Observable<IGiphyPayload>;
  $currentPage: Observable<number>;
  $currentTerm: Observable<string>;
  $max: Observable<boolean>;

  private limit = 8;
  private query$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private giphyService: GiphyService,
    private router: Router
  ) { }

  ngOnInit() {
    const $currentTerm = this.activatedRoute.queryParams.pipe(
      pluck('query'),
      debounceTime(1000),
      distinctUntilChanged()
    );

    this.$currentPage = this.activatedRoute.params.pipe(
      map(({ offset }) => Number(offset))
    );

    this.$getGifs = combineLatest([this.$currentPage, $currentTerm]).pipe(
      switchMap(([offset, currentTerm]) => {
        const offsetLimit = this.limit * offset;
        return currentTerm
          ? this.giphyService.searchGifs(this.limit, currentTerm, offsetLimit, offset)
          : this.giphyService.getTrending(this.limit, offsetLimit, offset);
      }),
      share()
    );
  }

  onSearch(searchTerm) {
    this.query$.next(searchTerm);
    this.router.navigate(!searchTerm ? ['/page', '0'] : [], {
      queryParams: searchTerm ? { query: searchTerm } : {},
    });
  }
}
