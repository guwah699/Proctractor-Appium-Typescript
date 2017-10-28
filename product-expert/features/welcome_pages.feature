Feature: Display welcome pages

Background:
Given I am on the first welcome page

Scenario: User scrolls through the welcome pages and proceeds
When I scroll past a welcome page
And I scroll past a welcome page
And I click the 'Let's Go' button on the last page
Then I should see the motivation home page

Scenario: User closes the first welcome page
When I click the close 'X' icon
Then I should see the motivation home page

Scenario: User scolls to and closes the second welcome page
When I scroll past a welcome page
And I click the close 'X' icon
Then I should see the motivation home page

Scenario: User scolls to and closes the third welcome page
When I scroll past a welcome page
And I scroll past a welcome page
And I click the close 'X' icon
Then I should see the motivation home page