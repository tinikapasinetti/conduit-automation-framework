export default class signUpPOM {

    constructor() {};

    screenElement = {
        usernameField: () => cy.get("[placeholder='Username']"),
        emailField: () => cy.get("[placeholder='Email']"),
        passwordField: () => cy.get("[placeholder='Password']"),
        signUpBtn: () => cy.get("[type='submit']"),
        errorMsg: () => cy.get("[class='error-messages']"),
    }

    enterUsername(username){
        if((username === "random")){
            username = "u+"+ Date.now();
        }
        this.screenElement.usernameField().type(username);
    }

    enterEmail(email){
        if((email === "blank")){
            email = ""
        }else if(email === "random"){
            email = "email+"+ Date.now()+ "@test.com";
        }
        this.screenElement.emailField().type(email);
    }
    enterPassword(password){
        if(!(password === "blank")){
            this.screenElement.passwordField().type(password);
        }
    }
    clickSignInBtn(){
        this.screenElement.signInBtn().click();
    }
}