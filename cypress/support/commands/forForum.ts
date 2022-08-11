Cypress.Commands.add("visitPageForum", (title: string): void => {
    cy.get("a[href*='forum'] > .b-main-navigation__text").contains("span", title).click();
    cy.title().should("contain", title);
});
