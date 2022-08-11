declare namespace Cypress {
    interface Chainable {
        visitPageVacancy(expectedValue: string): void;

        visitPageSupportUsers(expectedValue: string): void;

        visitPageAboutCompany(expectedValue: string): void;

        visitPageForum(title: string): void;

        visitPageWeather(expectedValue: string): void;

        visitPageCatalog(): void;

        appleButtonClick(): void;

        productButtonClick(product: string): void;

        clickIphone(expectedValue: string): void;

        carMarketClick(): void;

        enterModelCar(carName: string): void;

        clickModelCar(carName: string): void;

        clickButtonLogin(): void;

        clickButtonEnter(): void;

        checkErrorField(expectedValue: string): void;

        typeEmail(email: string): void;

        typePassword(password: string): void;

        clickButtonRegistration(expectedValue: string): void;

        approvePrivacyPolicy(): void;

        typeEmailForRegistration(email: string): void;

        typePasswordForRegistration(password: string): void;

        typeRepeatPasswordForRegistration(password: string): void;

        checkErrorPrivacyPolicy(): void;
    }
}
