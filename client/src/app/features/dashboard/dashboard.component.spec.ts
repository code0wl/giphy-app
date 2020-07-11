import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';
import { GiphyService } from 'services/giphy/giphy.service';
import { asyncData } from 'utilities/helpers/async-observable.helper';
import { mockGyphy } from 'utilities/testing/giphy.stub';
import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let giphyServiceSpy: { searchGifs: jasmine.Spy; getTrending: jasmine.Spy };
  let router: Router;

  beforeEach(async(() => {
    giphyServiceSpy = jasmine.createSpyObj('GiphyService', [
      'searchGifs',
      'getTrending'
    ]);
    TestBed.configureTestingModule({
      imports: [
        DashboardModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [{ provide: GiphyService, useValue: giphyServiceSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should request for awesome trending gifs', (done) => {
    fixture.ngZone.run(() => {
      giphyServiceSpy.getTrending.and.returnValue(asyncData(mockGyphy));
      component.$getGifs.subscribe(({searchTerm}) => {
        expect(searchTerm).toBe('Trending');
        expect(giphyServiceSpy.getTrending.calls.count()).toBe(1, 'one call');
        done();
      });
    });
  });

  it('should request for cool searched gifs', (done) => {
    fixture.ngZone.run(() => {
      component.$getGifs.subscribe((x) => {
        expect(giphyServiceSpy.searchGifs.calls.count()).toBe(1, 'one call');
        done();
      });
      giphyServiceSpy.searchGifs.and.returnValue(asyncData(mockGyphy));
      router.navigate(['/page/0'], { queryParams: { query: 'lol' } });
    });
  });

  it('should not allow further navigation is max is reached', (done) => {
    fixture.ngZone.run(() => {
      component.$max.subscribe(isMax => {
        expect(isMax).toBeTruthy();
        done();
      });
      giphyServiceSpy.getTrending.and.returnValue(asyncData(mockGyphy));
    });
  });
});
