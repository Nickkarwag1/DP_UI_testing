import { SELECTORS } from "../../selectors/selectorsForModelCar";
import CAR from "../../fixtures/modelCar.json";

Cypress.Commands.add("carMarketClick", (): void => {
    cy.get(SELECTORS.CAR_MARKET).click();
});
Cypress.Commands.add("enterModelCar", (carName: string): void => {
    cy.get(SELECTORS.INPUT_MODEL_CAR).contains("div", CAR.MARK).scrollIntoView().click({ force: true });
    cy.get(SELECTORS.DROPDOWN_MODEL_CAR).type(carName).should("be.visible", carName);
});
Cypress.Commands.add("clickModelCar", (carName: string): void => {
    cy.get(SELECTORS.FOUND_CAR).contains("div", carName).should("be.visible").click();
    cy.title().should("contain", carName);
});
