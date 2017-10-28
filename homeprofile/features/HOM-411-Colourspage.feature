Feature: Colours page
    As a user of Home Profile
    I should be able to see Colours page
    In order to create a profile for my home
  Background:
    When I click on "Create a space" KFbutton
    When I select text "Living area"
    And I click on "Next" KFbutton
    When I select text "Organised"
    And I click on "Next" KFbutton

  Scenario: Colours Page-Colour Selection
    When I select text "Neutral"
    And I click on "Next" KFbutton
    Then I should be taken to inspiration feed screen

  Scenario: Colours-No selection made
    Then Next button on "Colourspage" should be disabled

  Scenario: Colourspage-Back button
    And I click on "Back" KFbutton
    Then I should be taken to "goals" screen