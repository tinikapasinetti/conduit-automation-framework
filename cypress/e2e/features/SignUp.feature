Feature: Sign Up
        Scenario Outline: Verify successful sign up
                Given I open the Conduit web app
                And I click the "signUp" button on the "home" screen
                When I enter username "<username>" email "<email>" and password "<password>"
                And I click the 'signIn' button on the "signIn" screen
                Then I should see the "home" screen
                Examples:
                        | username | email  | password |
                        | random   | random | Test@123 |

        Scenario Outline: Verify unsuccessful sign up
                Given I open the Conduit web app
                And I click the "signUp" button on the "home" screen
                When I enter username "<username>" email "<email>" and password "<password>"
                And I click the 'signIn' button on the "signIn" screen
                Then I should see the "<errorMsg>" error message on the sign in screen
                Examples:
                        | username | email  | password | errorMsg                |
                        | blank    | random | Test@123 | username can't be blank |
                        | random   | blank  | Test@123 | email can't be blank    |
                        | random   | random | blank    | pasword can't be blank  |

