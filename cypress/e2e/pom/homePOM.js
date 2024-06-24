export default class homePOM {

    constructor() {
    }

    screenElement = {
        signInBtn: () => cy.contains('a.nav-link', 'Sign in'),
        signUpBtn: () => cy.contains('a.nav-link', 'Sign up'),
        homeScreenText: () => cy.contains('A place to share your knowledge.'),
        loadingIndicatorText: () => cy.get('[ng-hide="!$ctrl.loading"]'),
    };

    clickSignInBtn(){
        this.screenElement.signInBtn().click();
    }
    clickSignUpBtn(){
        this.screenElement.signUpBtn().click();
    }
    verifyScreen(){
        this.screenElement.homeScreenText().should('exist');
    }

}