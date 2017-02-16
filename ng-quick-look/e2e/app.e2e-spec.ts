import { NgQuickLookPage } from './app.po';

describe('ng-quick-look App', function() {
  let page: NgQuickLookPage;

  beforeEach(() => {
    page = new NgQuickLookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
