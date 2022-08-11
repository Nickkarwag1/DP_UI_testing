describe("Onliner negative tests", () => {
    before(() => {
        cy.fixture("loginAndRegistration").then((LOG_REG) => (this.LOG_REG = LOG_REG));
    });
    beforeEach(() => {
        cy.visit("/");
        cy.clickButtonLogin();
    });
    it("Login invalid e-mail and password", { scrollBehavior: false }, () => {
        cy.typeEmail(this.LOG_REG.INVALID_EMAIL);
        cy.typePassword(this.LOG_REG.INVALID_PASSWORD);
        cy.clickButtonEnter();
        cy.checkErrorField(this.LOG_REG.EXP_VALUE.INVALID_EMAIL_OR_PASSWORD);
    });
    it("Login only with e-mail", { scrollBehavior: false }, () => {
        cy.typeEmail(this.LOG_REG.EMAIL);
        cy.clickButtonEnter();
        cy.checkErrorField(this.LOG_REG.EXP_VALUE.ENTER_PASSWORD);
    });
    it("Login only with password", { scrollBehavior: false }, () => {
        cy.typePassword(this.LOG_REG.PASSWORD);
        cy.clickButtonEnter();
        cy.checkErrorField(this.LOG_REG.EXP_VALUE.ENTER_NICK_OR_EMAIL);
    });
    it("Registration only with e-mail and approve privacy policy", { scrollBehavior: false }, () => {
        cy.clickButtonRegistration(this.LOG_REG.REGISTRATION);
        cy.typeEmailForRegistration(this.LOG_REG.EMAIL);
        cy.approvePrivacyPolicy();
        cy.clickButtonEnter();
        cy.checkErrorField(this.LOG_REG.EXP_VALUE.ENTER_PASSWORD);
    });
    it("Registration only with password and approve privacy policy", { scrollBehavior: false }, () => {
        cy.clickButtonRegistration(this.LOG_REG.REGISTRATION);
        cy.typePasswordForRegistration(this.LOG_REG.PASSWORD);
        cy.approvePrivacyPolicy();
        cy.clickButtonEnter();
        cy.checkErrorField(this.LOG_REG.EXP_VALUE.ENTER_EMAIL);
    });
    it("Registration without repeat password", { scrollBehavior: false }, () => {
        cy.clickButtonRegistration(this.LOG_REG.REGISTRATION);
        cy.typeEmailForRegistration(this.LOG_REG.EMAIL);
        cy.typePasswordForRegistration(this.LOG_REG.PASSWORD);
        cy.approvePrivacyPolicy();
        cy.clickButtonEnter();
        cy.checkErrorField(this.LOG_REG.EXP_VALUE.ENTER_PASSWORD);
    });
    it("Registration without approve privacy policy", { scrollBehavior: false }, () => {
        cy.clickButtonRegistration(this.LOG_REG.REGISTRATION);
        cy.typeEmailForRegistration(this.LOG_REG.EMAIL);
        cy.typePasswordForRegistration(this.LOG_REG.PASSWORD);
        cy.typeRepeatPasswordForRegistration(this.LOG_REG.PASSWORD);
        cy.clickButtonEnter();
        cy.checkErrorPrivacyPolicy();
    });
});
