export default class signInPOM {

    constructor() { };

    screenElement = {
        emailField: () => cy.get("[type='email']"),
        passwordField: () => cy.get("[type='password']"),
        signInBtn: () => cy.get("[type='submit']"),
        errorMsg: () => cy.get("[class='error-messages']"),
    }

    enterEmail(email) {
        if (!(email === "blank")) {
            this.screenElement.emailField().type(email);
        }
    }
    enterPassword(password) {
        if (!(password === "blank")) {
            this.screenElement.passwordField().type(password);
        }
    }
    clickSignInBtn() {
        this.screenElement.signInBtn().click();
    }
}