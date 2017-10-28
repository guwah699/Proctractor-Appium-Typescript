Feature: User Task Guide Install pedestal basin
    As a user of Coach
    I should be able to navigate through task guide screens for a bathroom project
    In order to get to step guides for Install pedestal basin

Background: 
    Given I am on the "home" page

Scenario: Install pedestal basin Task Guide
    When I click on "Install pedestal basin" Guide
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
    When I click on a "Isolate the water and disconnect taps and waste" step 
    And I navigate through substeps
    And I click on Done
    Then I am on the "stepview" page