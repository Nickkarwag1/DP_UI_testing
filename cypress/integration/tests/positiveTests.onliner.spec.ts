describe("Onliner positive tests", () => {
    beforeEach(() => {
        cy.intercept("GET", "**/sdapi/pogoda/api/now*").as("weather");
        cy.visit("/");
    });
    it("Check page in footer vacancies", { scrollBehavior: false }, () => {
        cy.visitPageVacancy("Вакансии");
    });
    it("Check page in footer support users", { scrollBehavior: false }, () => {
        cy.visitPageSupportUsers("службу поддержки");
    });
    it("Check page in footer about company", { scrollBehavior: false }, () => {
        cy.visitPageAboutCompany("О сайте");
    });
    it("Check page forum", { scrollBehavior: false }, () => {
        cy.visitPageForum("Форум");
    });
    it("Click tab weather in header web app", { scrollBehavior: false }, () => {
        cy.wait("@weather");
        cy.visitPageWeather("pogoda");
    });
    it("Select Iphone 13 in catalog", { scrollBehavior: false }, () => {
        cy.visitPageCatalog();
        cy.appleButtonClick();
        cy.productButtonClick("Смартфоны");
        cy.clickIphone("iPhone 13");
    });
    it("Select model car in car market", { scrollBehavior: false }, () => {
        cy.carMarketClick();
        cy.enterModelCar("Subaru");
        cy.clickModelCar("Subaru");
    });
});
