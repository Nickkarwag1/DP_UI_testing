Cypress.Commands.add("visitPageWeather", (expectedValue: string): void => {
    cy.get(".b-top-navigation-informers a[href*='pogoda.onliner']").should("be.visible").click();
    cy.url().should("contain", expectedValue);
});
