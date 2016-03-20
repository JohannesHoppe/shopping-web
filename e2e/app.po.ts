export class ShoppingWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('shopping-web-app p')).getText();
  }
}
