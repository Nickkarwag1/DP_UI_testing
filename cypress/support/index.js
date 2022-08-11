import "./commands/forFooter";
import "./commands/forForum";
import "./commands/forWeather";
import "./commands/forSelectIphone";
import "./commands/forModelCar";
import "./commands/forLoginAndRegistration";
Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});
