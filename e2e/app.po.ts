import { browser, element, by } from 'protractor';

export class MuseumWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ux-root h1')).getText();
  }
}
