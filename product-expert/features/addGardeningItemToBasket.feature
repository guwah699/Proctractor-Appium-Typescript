Feature: Add a Gardening item to shopping basket

Background: 
Given I am on the first welcome page
When I click the close 'X' icon

@Lawnmower
Scenario: User search for a Lawnmower and add it to shopping basket
When I click on "Gardening" hero card
And I click on "Lawnmowers" button 
And I click on text "Products"
And I click on the first product from the list
And I click on "Add to basket" button   
When I click the basket icon 
Then I should see the Checkout button

@Cleaning
Scenario: User search for a Cleaning Item and add it to shopping basket
When I click on "Gardening" hero card
And I click on "Cleaning" button 
And I click on text "Products"
And I click on the first product from the list 
And I click on "Add to basket" button  
When I click the basket icon 
Then I should see the Checkout button

@Trimmers
Scenario: User search for a Trimmers and add it to shopping basket
When I click on "Gardening" hero card
And I click on "Trimmers" button 
And I click on text "Products"
And I click on the first product from the list
And I click on "Add to basket" button 
When I click the basket icon
Then I should see the Checkout button

@Sawing
Scenario: User search for a Sawing and add it to shopping basket
When I click on "Gardening" hero card
And I click on "Sawing" button 
And I click on text "Products"
And I click on the first product from the list
And I click on "Add to basket" button 
When I click the basket icon
Then I should see the Checkout button

@PressureWater
Scenario: User search for a Pressure Washers and add it to shopping basket
When I click on "Gardening" hero card
And I click on "Pressure Washers" button 
And I click on text "Products"
And I click on the first product from the list
And I click on "Add to basket" button 
When I click the basket icon
Then I should see the Checkout button

@GardeningCultivating
Scenario: User search for a Cultivating item and add it to shopping basket
When I click on "Gardening" hero card
And I click on "Cultivating" button 
And I click on text "Products"
And I click on the first product from the list
And I click on "Add to basket" button 
When I click the basket icon
Then I should see the Checkout button

@GardeningCleaning
Scenario: User search for a Cleaning item and add it to shopping basket
When I click on "Gardening" hero card
And I click on "Cleaning" button 
And I click on text "Products"
And I click on the first product from the list
And I click on "Add to basket" button 
When I click the basket icon
Then I should see the Checkout button

@Gardening.Plant.Care
Scenario: User search for a Plant Care item and add it to shopping basket
When I click on "Gardening" hero card
And I click on "Plant Care" button 

