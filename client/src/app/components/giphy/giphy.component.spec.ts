import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DummyComponent } from 'utilities/testing/dummy.component';
import { GiphyComponent } from './giphy.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('GiphyComponent', () => {
  let component: GiphyComponent;
  let fixture: ComponentFixture<GiphyComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [DummyComponent]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a giphy title correctly inside of a h3', () => {
    component.title = 'wow!'
    fixture.detectChanges();
    const { innerText } = el.query(By.css('h3')).nativeElement;
    expect(innerText).toBe('wow!');
  });

  it('should display the correct given url in an iframe', () => {
    component.url = 'some silly url'
    fixture.detectChanges();
    const src = el.query(By.css('iframe')).nativeElement.getAttribute('src');
    expect(src).toBe('some silly url');
  });
});
