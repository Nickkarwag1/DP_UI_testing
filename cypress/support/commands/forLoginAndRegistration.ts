Cypress.Commands.add("clickButtonLogin", (): void => {
    cy.get(".auth-bar__item--text").click();
});
Cypress.Commands.add("clickButtonEnter", (): void => {
    cy.get(".auth-form__button_width_full").click();
});
Cypress.Commands.add("checkErrorField", (expectedValue: string): void => {
    cy.get(".auth-form__description_error").contains("div", expectedValue).should("be.visible");
});
Cypress.Commands.add("typeEmail", (email: string): void => {
    cy.get("[placeholder='Ник или e-mail']").type(email).should("have.value", email);
});
Cypress.Commands.add("typePassword", (password: string): void => {
    cy.get("[placeholder='Пароль']").type(password).should("have.value", password);
});
Cypress.Commands.add("clickButtonRegistration", (expectedValue: string): void => {
    cy.get("a[href$='registration']").click();
    cy.url().should("contain", expectedValue);
});
Cypress.Commands.add("approvePrivacyPolicy", (): void => {
    cy.get("input.i-checkbox__real").click({ force: true });
});
Cypress.Commands.add("typeEmailForRegistration", (email: string): void => {
    cy.get("[placeholder='Ваш e-mail']").type(email).should("have.value", email);
});
Cypress.Commands.add("typePasswordForRegistration", (password: string): void => {
    cy.get("[placeholder='Придумайте пароль']").type(password).should("have.value", password);
});
Cypress.Commands.add("typeRepeatPasswordForRegistration", (password: string): void => {
    cy.get("[placeholder='Повторите пароль']").type(password).should("have.value", password);
});
Cypress.Commands.add("checkErrorPrivacyPolicy", (): void => {
    cy.get(".growl-content").should("contain.text", "Политикой конфиденциальности и Пользовательским соглашением");
});
