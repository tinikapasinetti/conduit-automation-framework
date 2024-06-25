export default class Utility {

    generateRandomEmail() {
        return "email+" + String(new Date().getTime()) + "@test.com";
    }

    generateRandomUsername(){
        return "user+" + String(new Date().getTime());
    }

    generateRandomTitle(){
        return "title+" + String(new Date().getTime());
    }
}

