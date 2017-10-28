@smoke
Feature: User Projects - Add guides to project
    As a user of Coach
    I want to be able to add guides to my project plan
    So that I am able to see the guides which are useful to me.

Background: 
    Given I am on the "home" page

Scenario: Added Guides Projects Page 
    When I click on "Install toilet" Guide
    And I am on the "stepview" page
    And I click on "Add to project" button
    And The user navigates back
    And I click on "My DIY"
    Then I see "Install toilet" guide
    

    
