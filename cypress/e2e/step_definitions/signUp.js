import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import signUp from "../pom/signUpPOM";

const signUpScreen = new signUp();

And ("I enter username {string} email {string} and password {string}", (username, email, password) => {
    signUpScreen.enterUsername(username);
    signUpScreen.enterEmail(email);
    signUpScreen.enterPassword(password);
})

Then ("I should see the {string} error message on the sign in screen", (errorMsg) => {
    cy.get(signInScreen.screenElement.errorMsg).should('contain.text', errorMsg);
})

