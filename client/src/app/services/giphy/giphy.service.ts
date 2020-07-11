import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IGiphyPayload } from 'app/models/giphy/giphy.model';
import { environment } from 'client/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  constructor(private http: HttpClient) { }

  getTrending(limit = 8, offset = 0): Observable<IGiphyPayload> {
    const url = `${ environment.apiURL }trending?api_key=${ environment.ApiKey }&limit=${ limit }&offset=${ offset }`;
    return this.getHandler(url, '');
  }

  getGif(id: string): Observable<IGiphyPayload> {
    const url = `${ environment.apiURL }${ id }?api_key=${ environment.ApiKey }`;
    return this.getHandler(url);
  }

  searchGifs(limit, searchQuery, offset): Observable<IGiphyPayload> {
    const url = `${ environment.apiURL }search?api_key=${ environment.ApiKey }&q=${ searchQuery }&limit=${ limit }&offset=${ offset }}`;
    return this.getHandler(url, searchQuery);
  }

  private getHandler(url, searchTerm = 'Trending') {
    return this.http.get<IGiphyPayload>(url).pipe(
      map(({ data, pagination }) => ({
        data,
        searchTerm,
        pagination
      })),
      catchError(this.handleError)
    );
  }

  private handleError({ error }: HttpErrorResponse) {
    console.error(error);
    return throwError(error || 'Server error');
  }
}
