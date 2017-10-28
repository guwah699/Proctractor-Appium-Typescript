@smoke
Feature: User Projects - Empty State
    As a user of Coach
    I want to be able to access a place where I can save my favourite guides
    So that I can access the guides that are relevant to me.

Background: 
    Given I am on the "home" page

Scenario: Empty Projects Page 
    When I click on "My DIY"
    Then I am on the "My DIY" page