describe("Onliner negative tests", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("Login invalid e-mail and password", { scrollBehavior: false }, () => {
        cy.clickButtonLogin();
        cy.typeEmail("niyob94613@agrolivana");
        cy.typePassword("uiparoldiplom");
        cy.clickButtonEnter();
        cy.checkErrorField("Неверный логин или пароль");
    });
    it("Login only with e-mail", { scrollBehavior: false }, () => {
        cy.clickButtonLogin();
        cy.typeEmail("niyob94613@agrolivana.com");
        cy.clickButtonEnter();
        cy.checkErrorField("Укажите пароль");
    });
    it("Login only with password", { scrollBehavior: false }, () => {
        cy.clickButtonLogin();
        cy.typePassword("ui_parol_diplom");
        cy.clickButtonEnter();
        cy.checkErrorField("Укажите ник или e-mail");
    });
    it("Registration only with e-mail and approve privacy policy", { scrollBehavior: false }, () => {
        cy.clickButtonLogin();
        cy.clickButtonRegistration("registration");
        cy.typeEmailForRegistration("niyob94613@agrolivana.com");
        cy.approvePrivacyPolicy();
        cy.clickButtonEnter();
        cy.checkErrorField("Укажите пароль");
    });
    it("Registration only with password and approve privacy policy", { scrollBehavior: false }, () => {
        cy.clickButtonLogin();
        cy.clickButtonRegistration("registration");
        cy.typePasswordForRegistration("ui_parol_diplom");
        cy.approvePrivacyPolicy();
        cy.clickButtonEnter();
        cy.checkErrorField("Укажите e-mail");
    });
    it("Registration without repeat password", { scrollBehavior: false }, () => {
        cy.clickButtonLogin();
        cy.clickButtonRegistration("registration");
        cy.typeEmailForRegistration("niyob94613@agrolivana.com");
        cy.typePasswordForRegistration("ui_parol_diplom");
        cy.approvePrivacyPolicy();
        cy.clickButtonEnter();
        cy.checkErrorField("Укажите пароль");
    });
    it("Registration without approve privacy policy", { scrollBehavior: false }, () => {
        cy.clickButtonLogin();
        cy.clickButtonRegistration("registration");
        cy.typeEmailForRegistration("niyob94613@agrolivana.com");
        cy.typePasswordForRegistration("ui_parol_diplom");
        cy.typeRepeatPasswordForRegistration("ui_parol_diplom");
        cy.clickButtonEnter();
        cy.checkErrorPrivacyPolicy();
    });
});
