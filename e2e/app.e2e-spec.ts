import { BlogResearchAppPage } from './app.po';

describe('blog-research-app App', function() {
  let page: BlogResearchAppPage;

  beforeEach(() => {
    page = new BlogResearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
