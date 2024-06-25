export default class Utility {
    generateRandomEmail() {
        return "email+" + String(new Date().getTime()) + "@test.com";
    }

    gernateRandomUsername(){
        return "user+" + String(new Date().getTime());
    }
}

