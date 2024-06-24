Feature: Sign Up
Scenario Outline: Verify successful sign up
        Given I open the Conduit web app
        And I click the "signUp" button on the "home" screen
        When I enter username "<username>" email "<email>" and password "<password>"
        And I click the 'signIn' button on the "signIn" screen
        Then I should see the "home" screen
Examples:
    | username | email   | password |
    | random   | random  | Test@123 |