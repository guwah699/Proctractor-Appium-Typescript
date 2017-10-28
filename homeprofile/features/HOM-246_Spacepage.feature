Feature: Space Screen
    As a user of Home Profile
    I should be able to see Spacepage
    In order to create a profile for my home
  Background:
    When I click on "Create a space" KFbutton

  Scenario: Style Selection
    When I select text "Living area"
    And I click on "Next" KFbutton
    Then I should be taken to "goals" screen

  Scenario: No selection made
    Then Next button on "Spacepage" should be disabled

  Scenario: Only Living area is enabled
    Then only Living area should be enabled
