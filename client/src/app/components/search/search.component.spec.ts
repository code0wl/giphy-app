import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DummyComponent } from 'utilities/testing/dummy.component';
import { SearchComponent } from './search.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [DummyComponent]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be allowed to have a default value', () => {
    component.val = 'Some awesome giphy';
    fixture.detectChanges();
    const input = el.query(By.css('input')).nativeElement;
    expect(input.value).toBe(component.val);
  });

  it('should emit new values on changes ', () => {
    const spy = spyOn(component, 'emitValue');
    const input = el.query(By.css('input')).nativeElement;
    input.dispatchEvent(new Event('keyup'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

});
