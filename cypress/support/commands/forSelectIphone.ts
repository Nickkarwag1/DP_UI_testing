import { SELECTORS } from "../../selectors/selectorsForSelectIphone";
import APPLE from "../../fixtures/productApple.json";

Cypress.Commands.add("visitPageCatalog", (): void => {
    cy.get(SELECTORS.CATALOG).contains("span", APPLE.CATALOG).click();
    cy.url().should("contain", APPLE.CATALOG_URL_CONTAIN);
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
