import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import home from '../pom/homePOM';
import signIn from '../pom/signInPOM';

const homeScreen = new home();
const signInScreen = new signIn();

Given("I open the Conduit web app", () => {
    cy.visit(Cypress.env("conduitHomeScreen"));
    cy.intercept({
        path: '/api/articles?limit=10&offset=0',
    }).as('loadHomeScreen');

})

And ("I click the {string} button on the {string} screen", (btnType, screen) => {
    if(btnType === "signIn"){
        if(screen === "home"){
            homeScreen.clickSignInBtn();
        }else{
            signInScreen.clickSignInBtn();
        }
    }else {
        homeScreen.clickSignUpBtn();
    }
})

Then("I should see the {string} screen", (screen) => {
    switch (screen) {
        case 'home':
            homeScreen.verifyScreen();
    }

})

