Feature: I want Add Leisure item to shopping basket

Background: 
Given I am on the first welcome page
When I click the close 'X' icon

@BBQs
Scenario: User search for a BBQs item and add it to shopping basket
When I click on "Leisure" hero card
And I click on "BBQs" button
And I click on text "Products"
And I click on the first product from the list
And I click on "Add to basket" button 
When I click the basket icon
Then I should see the Checkout button

@BBQs.Tools
Scenario: User search for a BBQs Tools item and add it to shopping basket
When I click on "Leisure" hero card
And I click on "BBQ Tools" button
And I click on text "Products"
And I click on the first product from the list
And I click on "Add to basket" button 
When I click the basket icon
Then I should see the Checkout button

@SeatingAndDining
Scenario: User search for a SeatingAndDining item and add it to shopping basket
When I click on "Leisure" hero card 
And I click on "Seating and Dining" button
And I click on text "Products"
And I click on the first product from the list
And I click on "Add to basket" button 
When I click the basket icon
Then I should see the Checkout button

@Gardening.Accessories
Scenario: User search for a Gardening Accessories item and add it to shopping basket
When I click on "Leisure" hero card 
And I click on "Garden Accessories" button
And I click on text "Products"
And I click on the first product from the list
And I click on "Add to basket" button 
When I click the basket icon
Then I should see the Checkout button

@Gazebos&Pergolas
Scenario: User search for a Gazebos and Pergolas item and add it to shopping basket
When I click on "Leisure" hero card 
And I click on "Gazebos & Pergolas" button
And I click on text "Products"
And I click on the first product from the list
And I click on "Add to basket" button 
When I click the basket icon
Then I should see the Checkout button

@GazebosDecor
Scenario: User search for a Garden Decor item and add it to shopping basket
When I click on "Leisure" hero card 
And I click on "Garden Decor" button
And I click on text "Products"
And I click on the first product from the list
And I click on "Add to basket" button 
When I click the basket icon
Then I should see the Checkout button

@PlantDecor
Scenario: User search for a Plant Decor item and add it to shopping basket
When I click on "Leisure" hero card 
And I click on "Plant Decor" button
And I click on text "Products"
And I click on the first product from the list
And I click on "Add to basket" button 
When I click the basket icon
Then I should see the Checkout button
