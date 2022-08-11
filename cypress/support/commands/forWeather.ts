import { SELECTORS } from "../../selectors/selectorsForWeather";

Cypress.Commands.add("visitPageWeather", (expectedValue: string): void => {
    cy.get(SELECTORS.WEATHER_BUTTON).should("be.visible").click();
    cy.url().should("contain", expectedValue);
});
