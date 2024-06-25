Feature: Sign In

        Scenario Outline: Verify successful login
                Given I open the Conduit web app
                And I click the "signIn" button on the "home" screen
                When I enter email "<email>" and password "<password>"
                And I click the "signIn" button on the "signIn" screen
                Then I should see the "home" screen
                Examples:
                        | email               | password |
                        | tinikapas@gmail.com | Test@123 |

        Scenario Outline: Verify unsuccessful login error messages
                Given I open the Conduit web app
                And I click the "signIn" button on the "home" screen
                When I enter email "<email>" and password "<password>"
                And I click the "signIn" button on the "signIn" screen
                Then I should see the "<errorMsg>" error message on the sign in screen
                Examples:
                        | email               | password | errorMsg                     |
                        | abvde@gmail.com     | Test@123 | email or password is invalid |
                        | tinikapas@gmail.com | Test@124 | email or password is invalid |
                        | abvde@gmail.com     | blank    | password can't be blank      |
                        | blank               | Tes@123  | email can't be blank         |
