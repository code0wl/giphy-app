import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { dashboardRoutes } from 'features/dashboard/dashboard.routing';
import { DummyComponent } from 'utilities/testing/dummy.component';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let location: Location;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [Location],
      imports: [RouterTestingModule.withRoutes(dashboardRoutes)],
      declarations: [DummyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    el = fixture.debugElement;
  });

  afterAll(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the current page correctly', () => {
    component.currentPage = 1;
    fixture.detectChanges();
    const { nativeElement } = el.query(By.css('.pagination'));

    expect(nativeElement.dataset.current).toBe('1');
  });

  it('should allow user to go to next', (done) => {
    component.currentPage = 1;
    fixture.detectChanges();
    const buttons = el.queryAll(By.directive(RouterLink));
    const next = buttons[1];

    next.nativeElement.click();

    fixture.whenStable().then(() => {
      expect(location.path()).toContain('2');
      done();
    });

  });

  it('should allow user to go to previous', (done) => {
    component.currentPage = 10;
    fixture.detectChanges();
    const buttons = el.queryAll(By.directive(RouterLink));
    const [prev] = buttons;

    prev.nativeElement.click();

    fixture.whenStable().then(() => {
      expect(location.path()).toContain('9');
      done();
    });

  });

  it('should not be allowed to click previous on first page', (done) => {
    const buttons = el.queryAll(By.directive(RouterLink));
    const [prev] = buttons;

    prev.nativeElement.click();

    fixture.whenStable().then(() => {
      expect(location.path()).toContain('0');
      done();
    });

  });

});
