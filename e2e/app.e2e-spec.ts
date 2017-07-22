import { BbcProjectPage } from './app.po';

describe('bbc-project App', () => {
  let page: BbcProjectPage;

  beforeEach(() => {
    page = new BbcProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
