import { LoaderService } from './loader.service';

describe('Service: Loader', () => {
  let loaderService: LoaderService;

  beforeEach(() => {
    loaderService = new LoaderService();
  });

  it('should show by default', done => {
    loaderService.getLoaderState().subscribe(x => {
      expect(x).toBe(true);
      done();
    });
  });
  it('should hide if overridden', done => {
    loaderService.hide();

    loaderService.getLoaderState().subscribe(x => {
      expect(x).toBeFalsy();
      done();
    });
  });

  it('should toggle', done => {
    loaderService.hide();
    loaderService.show();
    loaderService.getLoaderState().subscribe(x => {
      expect(x).toBe(true);
      done();
    });
  });
});
