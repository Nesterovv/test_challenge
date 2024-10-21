import { BasePage } from './BasePage';

export class BrokenImagesPage extends BasePage {
  private imageSelector: string = '.example img';

  navigate() {
    this.navigateTo('/broken_images');
  }

  verifyImagesBroken() {
    cy.get(this.imageSelector).each(($img) => {
      cy.wrap($img).should('be.visible').and(($img) => {
        expect($img[0].naturalWidth).to.equal(0); 
      });
    });
  }
}