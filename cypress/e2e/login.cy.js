/// <reference types="Cypress" />

const locators = require("../fixtures/locator.json");



describe("login test", () => {
    it.only("login with valid credentials", () => {
        cy.visit("/");
        cy.get(locators.Login.loginButton).click();
        cy.get(locators.SharedElements.emailInput).type("viki.verebes@gmail.com");
        cy.get(locators.SharedElements.passwordInput).type("12341234");
        cy.get(locators.SharedElements.submitButton).click();
    });

    it.only("logout", () => {
        
        cy.get(".nav-link").should("have.length", 3);
    });
});