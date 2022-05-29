export class BasePage {
  static clickInElement(element) {
      return cy.get(element).should('be.visible').click();
  }

  static clickInElementByText(element, text) {
      return cy.get(`${element}:contains(${text})`).should('be.visible').click();
  }

  static clickInContainsText(text) {
    return cy.contains(text).should('be.visible').click();
  }

  static fillValueInInput(element, value) {
    return cy.get(element).clear({force: true}).type(`${value}`);
}

  static fillValueInInputEnter(element, value) {
      return cy.get(element).clear({force: true}).type(`${value}{enter}`);
  }

  static getVisibleElement(element) {
      return cy.get(element, {timeout: 10000}).should('be.visible');
  }

  static checkElementContainsText(element, text) {
      return cy.contains(element, text).should('be.visible');
  }
}
