Feature: User Task Guide Tile Wall
    As a user of Coach
    I should be able to navigate through task guide screens for a bathroom project
    In order to get to step guides for Tiling a Wall

Background: 
    Given I am on the "home" page

Scenario: Tile Wall Task Guide
    When I scroll until "Tile wall" is in view
    And I click on "Tile wall" Guide
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
    When I click on a "Remove the wall tiles" step  
    And I navigate through substeps
    And I click on Done
    Then I am on the "stepview" page