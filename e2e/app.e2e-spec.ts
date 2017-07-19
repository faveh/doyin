import { SportalePage } from './app.po';

describe('sportale App', () => {
  let page: SportalePage;

  beforeEach(() => {
    page = new SportalePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
