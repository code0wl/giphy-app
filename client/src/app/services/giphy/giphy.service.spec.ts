import { HttpErrorResponse } from '@angular/common/http';

import {
  asyncData,
  asyncError
} from 'app/utilities/helpers/async-observable.helper';
import { mockGyphy } from 'app/utilities/testing/giphy.stub';
import { GiphyService } from './giphy.service';

describe('GiphyService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let giphyService: GiphyService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    giphyService = new GiphyService(httpClientSpy as any);
    httpClientSpy.get.and.returnValue(asyncData(mockGyphy));
  });

  it('should retrieve trending items and be called once', done => {
    giphyService.getTrending().subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
      expect(httpClientSpy.get.calls.argsFor(0).pop()).toContain('trending');
      done();
    });
  });

  it('should retrieve the correct giphy based on id given', done => {
    giphyService.getGif('1234').subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
      expect(httpClientSpy.get.calls.argsFor(0).pop()).toContain('gifs/1234');
      done();
    });
  });

  it('should retrieve giphies matching the search criteria', done => {
    giphyService.searchGifs(8, 'puppies', 0).subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
      expect(httpClientSpy.get.calls.argsFor(0).pop()).toContain('puppies');
      done();
    });
  });

  it('should fail gracefully', done => {
    const errorResponse = new HttpErrorResponse({
      error: '404',
      status: 404,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    giphyService.getTrending().subscribe(
      () => '',
      error => {
        expect(error).toContain('404');
        expect(error).not.toContain('200');
        done();
      }
    );
  });
});
