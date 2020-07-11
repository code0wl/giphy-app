import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnChanges {
  @Input() val: string;
  @Output() search = new EventEmitter();

  ngOnChanges(): void {
    this.emitValue(this.val);
  }

  emitValue(value: HTMLInputElement | string) {
    this.search.emit(value);
  }
}
