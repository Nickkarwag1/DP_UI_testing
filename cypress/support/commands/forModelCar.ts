Cypress.Commands.add("carMarketClick", (): void => {
    cy.get("a[href*='ab'] > .b-main-navigation__text").click();
});
Cypress.Commands.add("enterModelCar", (carName: string): void => {
    cy.get(".input-style__faux").contains("div", "Марка").scrollIntoView().click({ force: true });
    cy.get("[placeholder='Найти марку']").type(carName).should("be.visible", carName);
});
Cypress.Commands.add("clickModelCar", (carName: string): void => {
    cy.get(".dropdown-style__checkbox-sign").contains("div", carName).should("be.visible").click();
    cy.title().should("contain", carName);
});
