/// <reference types="Cypress" />
const locators = require("../fixtures/locator.json");

describe("registration test", () => {
    function makeId(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
    }

    let email = `${makeId(5)}@test.com`;

    it("register with valid input", () => {
        cy.visit("/");
        cy.get(locators.Register.registerButton).click();
        cy.get(locators.Register.firstNameInput).type("Viki");
        cy.get(locators.Register.lastNameInput).type("Developer");
        cy.get(locators.SharedElements.emailInput).type(email);
        cy.get(locators.SharedElements.passwordInput).type("12341234");
        cy.get(locators.Register.passwordConfirmationInput).type("12341234");
        cy.get(locators.Register.checkbox).check()
        cy.get(locators.SharedElements.submitButton).click();
        cy.url().should("not.include", "./register");
    });
});