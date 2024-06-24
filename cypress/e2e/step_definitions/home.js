import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import home from "../pom/homePOM";

const homeScreen = new home();

And("I see the loading indicator text", () => {
    cy.get(homeScreen.screenElement.loadingIndicatorText).should('exist');
});

When("The page finishes loading", () => {
    cy.wait('@loadHomeScreen');
});

Then("I should see the global feed featuring 10 articles", () => {
    cy.get('article-preview').its('length').should('eq', 10)
});


