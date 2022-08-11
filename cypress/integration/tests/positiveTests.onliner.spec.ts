describe("Onliner positive tests", () => {
    beforeEach(() => {
        cy.intercept("GET", "**/sdapi/pogoda/api/now*").as("weather");
        cy.visit("/");
    });
    it("Check page vacancies", { scrollBehavior: false }, () => {
        cy.get("a[href$='vacancy']").scrollIntoView().should("be.visible").click();
        cy.url().should("contain", "vacancy");
    });
    it("Check page support", { scrollBehavior: false }, () => {
        cy.get("a[href*='support']").scrollIntoView().should("be.visible").click();
        cy.url().should("contain", "support");
    });
    it("Check page about company", { scrollBehavior: false }, () => {
        cy.get("a[href*='about']").scrollIntoView().should("be.visible").click();
        cy.url().should("contain", "about");
    });
    it("Check page forum", { scrollBehavior: false }, () => {
        cy.get("a[href*='forum'] > .b-main-navigation__text").contains("span", "Форум").click();
        cy.title().should("contain", "Форум");
    });
    it("Click tab weather in header web app", { scrollBehavior: false }, () => {
        cy.wait("@weather");
        cy.get(".b-top-navigation-informers a[href*='pogoda.onliner']").should("be.visible").click();
        cy.url().should("contain", "pogoda");
    });
    it("Select Iphone 13 in catalog", { scrollBehavior: false }, () => {
        cy.get("span.b-main-navigation__text").contains("span", "Каталог").click();
        cy.url().should("contain", "catalog");
        cy.get("[data-item-id='Apple']").click();
        cy.get(".catalog-navigation-list__aside-list").within(() => {
            cy.get(".catalog-navigation-list__aside-title").contains("div", "Смартфоны").click({ force: true });
        });
        cy.get("a[href$='iphone13']").eq(0).click({ force: true });
        cy.get("h1.catalog-masthead__title").should("contain", "iPhone 13");
    });
    it("Select model car in car market", { scrollBehavior: false }, () => {
        cy.get("a[href*='ab'] > .b-main-navigation__text").click();
        cy.get(".input-style__faux").contains("div", "Марка").scrollIntoView().click({ force: true });
        cy.get("[placeholder='Найти марку']").type("Subaru").should("be.visible", "Subaru");
        cy.get(".dropdown-style__checkbox-sign").contains("div", "Subaru").should("be.visible").click();
        cy.title().should("contain", "Subaru");
    });
});
