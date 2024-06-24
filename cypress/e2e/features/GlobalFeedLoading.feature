Feature: Global Feed Loading and Final State

    Scenario: Verify the loading and final state of the global feed
        Given I open the Conduit web app
        And I see the loading indicator text
        When The page finishes loading
        Then I should see the global feed featuring 10 articles

