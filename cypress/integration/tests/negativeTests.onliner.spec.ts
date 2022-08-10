describe("Onliner negative tests", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("Login invalid e-mail and password", { scrollBehavior: false }, () => {
        cy.get(".auth-bar__item--text").click();
        cy.get("[placeholder='Ник или e-mail']")
            .type("niyob94613@agrolivana")
            .should("have.value", "niyob94613@agrolivana");
        cy.get("[placeholder='Пароль']").type("uiparoldiplom").should("have.value", "uiparoldiplom");
        cy.get(".auth-form__button_width_full").click();
        cy.get(".auth-form__description_error").contains("div", "Неверный логин или пароль").should("be.visible");
    });
    it("Login only with e-mail", { scrollBehavior: false }, () => {
        cy.get(".auth-bar__item--text").click();
        cy.get("[placeholder='Ник или e-mail']")
            .type("niyob94613@agrolivana.com")
            .should("have.value", "niyob94613@agrolivana.com");
        cy.get(".auth-form__button_width_full").click();
        cy.get(".auth-form__description_error").contains("div", "Укажите пароль").should("be.visible");
    });
    it("Login only with password", { scrollBehavior: false }, () => {
        cy.get(".auth-bar__item--text").click();
        cy.get("[placeholder='Пароль']").type("ui_parol_diplom").should("have.value", "ui_parol_diplom");
        cy.get(".auth-form__button_width_full").click();
        cy.get(".auth-form__description_error").contains("div", "Укажите ник или e-mail").should("be.visible");
    });
    it("Registration only with e-mail and approve privacy policy", { scrollBehavior: false }, () => {
        cy.get(".auth-bar__item--text").click();
        cy.get("a[href$='registration']").click();
        cy.get("[placeholder='Ваш e-mail']")
            .type("niyob94613@agrolivana.com")
            .should("have.value", "niyob94613@agrolivana.com");
        cy.get("input.i-checkbox__real").click({ force: true });
        cy.get(".auth-form__button_width_full").click();
        cy.get(".auth-form__description_error").contains("div", "Укажите пароль").should("be.visible");
    });
    it("Registration only with password and approve privacy policy", { scrollBehavior: false }, () => {
        cy.get(".auth-bar__item--text").click();
        cy.get("a[href$='registration']").click();
        cy.get("[placeholder='Придумайте пароль']").type("ui_parol_diplom").should("have.value", "ui_parol_diplom");
        cy.get("input.i-checkbox__real").click({ force: true });
        cy.get(".auth-form__button_width_full").click();
        cy.get(".auth-form__description_error").contains("div", "Укажите e-mail").should("be.visible");
        cy.get(".auth-form__description_error").eq(1).contains("div", "Укажите пароль").should("be.visible");
    });
    it("Registration without repeat password", { scrollBehavior: false }, () => {
        cy.get(".auth-bar__item--text").click();
        cy.get("a[href$='registration']").click();
        cy.get("[placeholder='Ваш e-mail']")
            .type("niyob94613@agrolivana.com")
            .should("have.value", "niyob94613@agrolivana.com");
        cy.get("[placeholder='Придумайте пароль']").type("ui_parol_diplom").should("have.value", "ui_parol_diplom");
        cy.get("input.i-checkbox__real").click({ force: true });
        cy.get(".auth-form__button_width_full").click();
        cy.get(".auth-form__description_error").contains("div", "Укажите пароль").should("be.visible");
    });
    it("Registration without approve privacy policy", { scrollBehavior: false }, () => {
        cy.get(".auth-bar__item--text").click();
        cy.get("a[href$='registration']").click();
        cy.get("[placeholder='Ваш e-mail']")
            .type("niyob94613@agrolivana.com")
            .should("have.value", "niyob94613@agrolivana.com");
        cy.get("[placeholder='Придумайте пароль']").type("ui_parol_diplom").should("have.value", "ui_parol_diplom");
        cy.get("[placeholder='Повторите пароль']").type("ui_parol_diplom").should("have.value", "ui_parol_diplom");
        cy.get(".auth-form__button_width_full").click();
        cy.get(".growl-content").should("contain.text", "Политикой конфиденциальности и Пользовательским соглашением");
    });
});
