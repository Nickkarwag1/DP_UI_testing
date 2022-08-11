Cypress.Commands.add("visitPageCatalog", (): void => {
    cy.get("span.b-main-navigation__text").contains("span", "Каталог").click();
    cy.url().should("contain", "catalog");
});
Cypress.Commands.add("appleButtonClick", (): void => {
    cy.get("[data-item-id='Apple']").should("be.visible").click();
});
Cypress.Commands.add("productButtonClick", (product: string): void => {
    cy.get(".catalog-navigation-list__aside-list").within(() => {
        cy.get(".catalog-navigation-list__aside-title").contains("div", product).click({ force: true });
    });
});
Cypress.Commands.add("clickIphone", (expectedValue: string): void => {
    cy.get("a[href$='iphone13'].catalog-navigation-list__dropdown-item").click({ force: true });
    cy.get("h1.catalog-masthead__title").should("contain", expectedValue);
});
