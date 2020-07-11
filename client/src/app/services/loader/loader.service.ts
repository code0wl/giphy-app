import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading$ = new BehaviorSubject<boolean>(true);

  show() {
    this.isLoading$.next(true);
  }
  hide() {
    this.isLoading$.next(false);
  }

  getLoaderState() {
    return this.isLoading$.asObservable();
  }
}
