import { SELECTORS } from "../../selectors/selectorsLoginAndRegistration";

Cypress.Commands.add("clickButtonLogin", (): void => {
    cy.get(SELECTORS.LOGIN_BUTTON).click();
});
Cypress.Commands.add("clickButtonEnter", (): void => {
    cy.get(SELECTORS.ENTER_BUTTON).click();
});
Cypress.Commands.add("checkErrorField", (expectedValue: string): void => {
    cy.get(SELECTORS.FIELDS_WITH_ERROR).contains("div", expectedValue).should("be.visible");
});
Cypress.Commands.add("typeEmail", (email: string): void => {
    cy.get(SELECTORS.LOGIN.EMAIL).type(email).should("have.value", email);
});
Cypress.Commands.add("typePassword", (password: string): void => {
    cy.get(SELECTORS.LOGIN.PASSWORD).type(password).should("have.value", password);
});
Cypress.Commands.add("clickButtonRegistration", (expectedValue: string): void => {
    cy.get(SELECTORS.REGISTRATION_BUTTON).click();
    cy.url().should("contain", expectedValue);
});
Cypress.Commands.add("approvePrivacyPolicy", (): void => {
    cy.get(SELECTORS.REGISTRATION.APPROVE_PRIVACY_POLICY).click({ force: true });
});
Cypress.Commands.add("typeEmailForRegistration", (email: string): void => {
    cy.get(SELECTORS.REGISTRATION.EMAIL).type(email).should("have.value", email);
});
Cypress.Commands.add("typePasswordForRegistration", (password: string): void => {
    cy.get(SELECTORS.REGISTRATION.PASSWORD).type(password).should("have.value", password);
});
Cypress.Commands.add("typeRepeatPasswordForRegistration", (password: string): void => {
    cy.get(SELECTORS.REGISTRATION.REPEAT_PASSWORD).type(password).should("have.value", password);
});
Cypress.Commands.add("checkErrorPrivacyPolicy", (): void => {
    cy.get(SELECTORS.REGISTRATION.ERROR_PRIVACY_POLICY).should(
        "contain.text",
        "Политикой конфиденциальности и Пользовательским соглашением",
    );
});
