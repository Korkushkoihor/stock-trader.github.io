import { UserPortfolioModule } from './user-portfolio.module';

describe('UserPortfolioModule', () => {
  let userPortfolioModule: UserPortfolioModule;

  beforeEach(() => {
    userPortfolioModule = new UserPortfolioModule();
  });

  it('should create an instance', () => {
    expect(userPortfolioModule).toBeTruthy();
  });
});
