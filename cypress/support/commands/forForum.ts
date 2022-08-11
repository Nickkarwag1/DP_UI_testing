import { SELECTORS } from "../../selectors/selectorsForForum";

Cypress.Commands.add("visitPageForum", (title: string): void => {
    cy.get(SELECTORS.FORUM).contains("span", title).click();
    cy.title().should("contain", title);
});
