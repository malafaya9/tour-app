import { TourAppPage } from './app.po';

describe('tour-app App', () => {
  let page: TourAppPage;

  beforeEach(() => {
    page = new TourAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
