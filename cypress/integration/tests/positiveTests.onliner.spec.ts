describe("Onliner positive tests", () => {
    beforeEach(() => {
        cy.intercept("GET", "**/sdapi/pogoda/api/now*").as("weather");
        cy.visit("/");
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
    it.only("Click tab weather in header web app", () => {
        cy.wait("@weather");
        cy.get(".b-top-navigation-informers a[href*='pogoda.onliner']").should("be.visible").click();
        cy.url().should("contain", "pogoda");
    });
});
