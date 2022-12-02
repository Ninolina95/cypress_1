/// <reference types="Cypress" />

import { faker } from "@faker-js/faker";
const Locators = require("../fixtures/locator.json");

describe("registration test", () => {
  let randomUser = {
  
   randomEmail: faker.internet.email(),
   randomFirstName: faker.name.firstName(),
   randomLastName: faker.name.lastName(),
   randomPassword: faker.internet.password(),
  };

  beforeEach("visit gallery app", () => {
    
    cy.visit("/");
    cy.get("a[href='/register']").click();
  });

  it("register without email address", () => {
    cy.get("#first-name").type("Filip");
    cy.get("#last-name").type("Nedovic");
    cy.get("#password").type("Qwerty123!");
    cy.get("#password-confirmation").type("Qwerty123!");
    cy.get("input[type='checkbox']").check();
    cy.get("button").click();
    cy.url().should("include", "/register");
  });

  it("register without password ", () => {
    cy.get("#first-name").type("Filip");
    cy.get("#last-name").type("Nedovic");
    cy.get("#email").type(email);
    cy.get("#password-confirmation").type("Qwerty123!");
    cy.get("input[type='checkbox']").check();
    cy.get("button").click();
    cy.url().should("include", "/register");
  });

  it("register without password confirmation", () => {
    cy.get("#first-name").type("Filip");
    cy.get("#last-name").type("Nedovic");
    cy.get("#email").type(email);
    cy.get("#password").type("Qwerty123!");
    cy.get("input[type='checkbox']").check();
    cy.get("button").click();
    cy.url().should("include", "/register");
  });

  it("register without checking TOS", () => {
    cy.get("#first-name").type("Filip");
    cy.get("#last-name").type("Nedovic");
    cy.get("#email").type(email);
    cy.get("#password").type("Qwerty123!");
    cy.get("#password-confirmation").type("Qwerty123!");
    cy.get("button").click();
    cy.url().should("include", "/register");
  });

  it.only("register with valid data", () => {
    cy.get(Locators.Register.registerButton).click();
    cy.get(Locators.Register.firstNameInput).type(randomUser.randomFirstName);
    cy.get(Locators.Register.lastNameInput).type(randomUser.randomLastName);
    cy.get(Locators.SharedElements.emailInput).type(randomUser.randomEmail);
    cy.get(Locators.SharedElements.passwordInput).type(randomUser.randomPassword);
    cy.get(Locators.Register.passwordConfirmationInput).type(randomUser.randomPassword);
    cy.get(Locators.Register.checkbox).check();
    cy.get(Locators.SharedElements.submitButton).click();

    cy.url().should("not.include", "/register");
  });


});