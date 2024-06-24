import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import signIn from "../pom/signInPOM";

const signInScreen = new signIn();

And ("I enter email {string} and password {string}", (email, password) => {
    signInScreen.enterEmail(email);
    signInScreen.enterPassword(password);
})

Then ("I should see the {string} error message on the sign in screen", (errorMsg) => {
    cy.get(signInScreen.screenElement.errorMsg).should('contain.text', errorMsg);
})


