import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { GiphyService } from 'services/giphy/giphy.service';
import { DummyComponent } from 'utilities/testing/dummy.component';
import { DetailComponent } from './detail.component';
import { DetailModule } from './detail.module';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let router: Router;
  let giphyServiceSpy: { getGif: jasmine.Spy };

  beforeEach(async(() => {
    giphyServiceSpy = jasmine.createSpyObj('GiphyService', ['getGif']);

    TestBed.configureTestingModule({
      imports: [
        DetailModule,
        RouterTestingModule.withRoutes([
          { path: 'detail/:id', component: DummyComponent }
        ])
      ],
      providers: [{ provide: GiphyService, useValue: giphyServiceSpy }],
      declarations: [DummyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to navigate back', () => {
    component.ngOnInit();
    router.navigateByUrl('/detail/1234');
    component.$selectedGif.subscribe(() => of(1234));
    expect(giphyServiceSpy.getGif).toHaveBeenCalledTimes(1);
  });
});
