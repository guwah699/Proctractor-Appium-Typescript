Feature: Add a Structures item to shopping basket

Background: 
Given I am on the first welcome page
When I click the close 'X' icon

@Decking
Scenario: User search for a Decking item and add it to shopping basket
When I click on "Landscaping" hero card
And I click on "Decking" button 
And I click on text "Products"
And I click on the first product from the list 
And I click on "Add to basket" button  
When I click the basket icon 
Then I should see the Checkout button

@Paving
Scenario: User search for a Paving item and add it to shopping basket
When I click on "Structures" hero card
And I click on "Paving" button 
And I click on text "Products"
And I click on the first product from the list 
And I click on "Add to basket" button  
When I click the basket icon 
Then I should see the Checkout button

@Fencing
Scenario: User search for a Fencing item and add it to shopping basket
When I click on "Structures" hero card
And I click on "Fencing" button 
And I click on text "Products"
And I click on the first product from the list 
And I click on "Add to basket" button  
When I click the basket icon 
Then I should see the Checkout button

@Shed&Storage
Scenario: User search for a Shed&Storage item and add it to shopping basket
When I click on "Structures" hero card 
And I click on "Sheds and Storage" button
And I click on text "Products"
And I click on the first product from the list 
And I click on "Add to basket" button  
When I click the basket icon 
Then I should see the Checkout button


@Greenhouses
Scenario: User search for a Structures item and add it to shopping basket
When I click on "Structures" hero card
And I click on "Greenhouses" button
And I click on text "Products"
And I click on the first product from the list 
And I click on "Add to basket" button  
When I click the basket icon 
Then I should see the Checkout button


@OutdoorAccessories
Scenario: User search for OutdoorAccessories item and add it to shopping basket
When I click on "Structures" hero card 
And I click on "Outdoor Accessories" button
And I click on text "Products"
And I click on the first product from the list 
And I click on "Add to basket" button  
When I click the basket icon 
Then I should see the Checkout button