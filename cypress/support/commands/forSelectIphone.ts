import { SELECTORS } from "../../selectors/selectorsForSelectIphone";

Cypress.Commands.add("visitPageCatalog", (): void => {
    cy.get(SELECTORS.CATALOG).contains("span", "Каталог").click();
    cy.url().should("contain", "catalog");
});
Cypress.Commands.add("appleButtonClick", (): void => {
    cy.get(SELECTORS.APPLE_BUTTON).should("be.visible").click();
});
Cypress.Commands.add("productButtonClick", (product: string): void => {
    cy.get(SELECTORS.LIST_PRODUCT).within(() => {
        cy.get(SELECTORS.TITLE_PRODUCT).contains("div", product).click({ force: true });
    });
});
Cypress.Commands.add("clickIphone", (expectedValue: string): void => {
    cy.get(SELECTORS.IPHONE).click({ force: true });
    cy.get(SELECTORS.TITLE_IPHONE).should("contain", expectedValue);
});
