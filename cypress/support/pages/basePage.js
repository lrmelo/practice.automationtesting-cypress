export class BasePage {
  static clickInElement(element) {
      return cy.get(element).should('be.visible').click();
  }

  static fillValueInInput(element, value) {
      return cy.get(element).clear({force: true}).type(`${value}{enter}`);
  }

  static getVisibleElement(element) {
      return cy.get(element, {timeout: 10000}).should('be.visible');
  }

  static checkElementContainsText(element, text) {
      return cy.contains(element, text).should('be.visible');
  }
}
