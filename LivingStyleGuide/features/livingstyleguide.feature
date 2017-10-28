Feature: Browse the living style guide
    As a test automation framework
    I should browse all pages of the living style guide and take screenshots
    In order to ensure any changes made are captured

Scenario: browsing the living style guide
Given I click the burger menu
And I choose "colours" from the sidebar
Then I screen capture the whole page
And I click the burger menu
When I choose "typography" from the sidebar
Then I screen capture the whole page
And I click the burger menu
When I choose "grid" from the sidebar
Then I screen capture the whole page