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
    And I click on board card

  Scenario: Lightbox is available
    When I click on "Save to Your Space" KFbutton
    
  Scenario: Next image
    When I click on "next" arrow
    Then it should display "previous" arrow

  Scenario: Previous image
   When I click on "next" arrow
   When I click on "previous" arrow
   Then it should not display "previous" arrow

  Scenario: Close button
    When I click on icon Close
    Then there should be "24" board cards available