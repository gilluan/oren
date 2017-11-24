import { OrenWebPage } from './app.po';

describe('oren-web App', () => {
  let page: OrenWebPage;

  beforeEach(() => {
    page = new OrenWebPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
