import { MuseumWebPage } from './app.po';

describe('museum-web App', function() {
  let page: MuseumWebPage;

  beforeEach(() => {
    page = new MuseumWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ux works!');
  });
});
