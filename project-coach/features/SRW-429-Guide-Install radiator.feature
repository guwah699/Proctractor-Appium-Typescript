@smoke
Feature: User Task Guide Install radiator
    As a user of Coach
    I should be able to navigate through task guide screens for a bathroom project
    In order to get to step guides for Install radiator

Background: 
    Given I am on the "home" page

Scenario: Install radiator Task Guide
    When I scroll until "Install radiator" is in view
    And I click on "Install radiator" Guide
    Then I am on the "stepview" page
    When I click on characteristics 
    Then I am on the "characteristics" page 
    When I close overlay
    Then I am on the "stepview" page
    When I click on Tools and Materials
    And filter the overlay
    Then I am on the "toolsAndMaterials" page
    When I close overlay
    Then I am on the "stepview" page
    When I click on a "Drain the radiator" step  
    And I navigate through substeps
    And I click on Done
    Then I am on the "stepview" page