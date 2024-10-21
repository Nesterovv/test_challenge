import { BrokenImagesPage } from '../POM/BrokenImagesPage';

describe('Broken Images Test', () => {
  const brokenImagesPage = new BrokenImagesPage();

  beforeEach(() => {
    brokenImagesPage.navigate();
  });

  it('should verify that all images are broken', () => {
    brokenImagesPage.verifyImagesBroken();
  });
});