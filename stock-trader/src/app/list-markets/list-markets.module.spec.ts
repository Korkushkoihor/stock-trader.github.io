import { ListMarketsModule } from './list-markets.module';

describe('ListMarketsModule', () => {
  let listMarketsModule: ListMarketsModule;

  beforeEach(() => {
    listMarketsModule = new ListMarketsModule();
  });

  it('should create an instance', () => {
    expect(listMarketsModule).toBeTruthy();
  });
});
