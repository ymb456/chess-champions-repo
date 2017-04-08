import { ChessChampionsPage } from './app.po';

describe('chess-champions App', () => {
  let page: ChessChampionsPage;

  beforeEach(() => {
    page = new ChessChampionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
