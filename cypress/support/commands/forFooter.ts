Cypress.Commands.add("visitPageVacancy", (expectedValue: string): void => {
    cy.get(`a[href$='vacancy']`).scrollIntoView().should("be.visible").click();
    cy.title().should("contain", expectedValue);
});
Cypress.Commands.add("visitPageSupportUsers", (expectedValue: string): void => {
    cy.get(`a[href*='support']`).scrollIntoView().should("be.visible").click();
    cy.title().should("contain", expectedValue);
});
Cypress.Commands.add("visitPageAboutCompany", (expectedValue: string): void => {
    cy.get(`a[href$='about']`).scrollIntoView().should("be.visible").click();
    cy.title().should("contain", expectedValue);
});
