Feature: Goals page
    As a user of Home Profile
    I should be able to see Goals page
    In order to create a profile for my home
  Background:
    When I click on "Create a space" KFbutton
    When I select text "Living area"
    And I click on "Next" KFbutton

  Scenario: Goalspage-Colour Selection
    When I select text "Organised"
    And I click on "Next" KFbutton
    Then I should be taken to "colour-selection" screen

  Scenario: Goalspage-No selection made
    Then Next button on "Goalspage" should be disabled

  Scenario: Goalspage-Multiple selection
    When I select text "Organised"
    When I select text "Spacious"
    Then only two options left unselected