import { PipmikPage } from './app.po';

describe('pipmik App', function() {
  let page: PipmikPage;

  beforeEach(() => {
    page = new PipmikPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
