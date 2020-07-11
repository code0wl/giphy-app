import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html'
})
export class GiphyComponent {
  @Input() url: string;
  @Input() title: string;
}
