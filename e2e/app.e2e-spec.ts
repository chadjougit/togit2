import { Togit2Page } from './app.po';

describe('togit2 App', function() {
  let page: Togit2Page;

  beforeEach(() => {
    page = new Togit2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
