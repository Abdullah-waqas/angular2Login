import { Angular2LoginPage } from './app.po';

describe('angular2-login App', () => {
  let page: Angular2LoginPage;

  beforeEach(() => {
    page = new Angular2LoginPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
