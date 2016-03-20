import { ShoppingWebPage } from './app.po';

describe('shopping-web App', function() {
  let page: ShoppingWebPage;

  beforeEach(() => {
    page = new ShoppingWebPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('shopping-web Works!');
  });
});
