describe("Onliner positive tests", () => {
    before(() => {
        cy.fixture("vacancies").then((VACANCY) => (this.VACANCY = VACANCY));
        cy.fixture("support").then((SUPPORT) => (this.SUPPORT = SUPPORT));
        cy.fixture("aboutCompany").then((COMPANY) => (this.COMPANY = COMPANY));
        cy.fixture("forum").then((FORUM) => (this.FORUM = FORUM));
        cy.fixture("weather").then((WEATHER) => (this.WEATHER = WEATHER));
        cy.fixture("productApple").then((APPLE) => (this.APPLE = APPLE));
        cy.fixture("modelCar").then((CAR) => (this.CAR = CAR));
        cy.fixture("intercepts").then((INTER) => (this.INTER = INTER));
    });
    beforeEach(() => {
        cy.intercept(this.INTER.METHOD.GET, this.INTER.URL.WEATHER).as(this.INTER.ALIAS.WEATHER);
        cy.visit("/");
    });
    it("Check page in footer vacancies", { scrollBehavior: false }, () => {
        cy.visitPageVacancy(this.VACANCY.EXP_VALUE.VACANCIES);
    });
    it("Check page in footer support users", { scrollBehavior: false }, () => {
        cy.visitPageSupportUsers(this.SUPPORT.EXP_VALUE.SUPPORT);
    });
    it("Check page in footer about company", { scrollBehavior: false }, () => {
        cy.visitPageAboutCompany(this.COMPANY.EXP_VALUE.ABOUT_COMPANY);
    });
    it("Check page forum", { scrollBehavior: false }, () => {
        cy.visitPageForum(this.FORUM.EXP_VALUE.FORUM);
    });
    it("Click tab weather in header web app", { scrollBehavior: false }, () => {
        cy.wait(this.INTER.WAIT.WEATHER);
        cy.visitPageWeather(this.WEATHER.EXP_VALUE.WEATHER);
    });
    it("Select product iPhone 13 in catalog", { scrollBehavior: false }, () => {
        cy.visitPageCatalog();
        cy.appleButtonClick();
        cy.productButtonClick(this.APPLE.PRODUCT.SMARTPHONES);
        cy.clickIphone(this.APPLE.EXP_VALUE.IPHONE_13);
    });
    it("Select model car Subaru in car market", { scrollBehavior: false }, () => {
        cy.carMarketClick();
        cy.enterModelCar(this.CAR.MODEL_CAR.SUBARU);
        cy.clickModelCar(this.CAR.MODEL_CAR.SUBARU);
    });
});
