import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { IGiphy } from 'client/src/app/models/giphy/giphy.model';
import { GiphyService } from 'client/src/app/services/giphy/giphy.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  $selectedGif: Observable<IGiphy>;

  constructor(
    private giphyService: GiphyService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.$selectedGif = this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.giphyService.getGif(id)),
      map(({ data }) => data)
    ) as Observable<IGiphy>;
  }

  goBack() {
    this.location.back();
  }
}
