Feature: Dashboard Lightbox
    As a user of Home Profile
    I should be able to see Lightbox
    In order to choose paints which match to my image
  Background:
    When I click on "Create a space" KFbutton
    When I select text "Living area"
    And I click on "Next" KFbutton
    When I select text "Organised"
    And I click on "Next" KFbutton
    When I select text "Neutral"
    And I click on "Next" KFbutton

  Scenario: Board Items
    Then there should be "24" board cards available

  Scenario: Project Items
    Then there should be "4" project cards available
  