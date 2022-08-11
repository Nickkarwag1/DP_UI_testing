import { SELECTORS } from "../../selectors/selectorsForFooter";

Cypress.Commands.add("visitPageVacancy", (expectedValue: string): void => {
    cy.get(SELECTORS.VACANCY).scrollIntoView().should("be.visible").click();
    cy.title().should("contain", expectedValue);
});
Cypress.Commands.add("visitPageSupportUsers", (expectedValue: string): void => {
    cy.get(SELECTORS.SUPPORT_USERS).scrollIntoView().should("be.visible").click();
    cy.title().should("contain", expectedValue);
});
Cypress.Commands.add("visitPageAboutCompany", (expectedValue: string): void => {
    cy.get(SELECTORS.ABOUT_COMPANY).scrollIntoView().should("be.visible").click();
    cy.title().should("contain", expectedValue);
});
