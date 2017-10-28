Feature: Display main header pages

Background:
Given I am on the first welcome page
When I click the close 'X' icon
Then I should see the motivation home page

@header1
Scenario: User opens and closes the burger menu
When I click to open the burger menu
And I click X to close the burger menu
Then I should see the motivation home page

@header2
Scenario: User opens the search page
When I click the search icon
Then I see an empty search page

@header3
Scenario: User opens the basket page
When I click the basket icon 
Then I see an empty basket page

@header4
Scenario: User goes back to the motivation home page
When I click the basket icon 
And I click the back arrow back arrow icon 
Then I should see the motivation home page 

@header5
Scenario: User goes back to search results
When I click the search icon
Then I see an empty search page
When I enter "1000W Rotary Lawnmower"
Then I see a list of search results
When I click the basket icon 
And I click the back arrow back arrow icon 
Then I see a list of search results