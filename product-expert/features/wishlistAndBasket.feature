Feature: Add to wish list and basket
 
Background:
Given I am on the first welcome page
When I click the close 'X' icon
When I click the search icon
Then I see an empty search page
When I enter "1000W Rotary Lawnmower"
Then I see a list of search results
When I click "1000W Rotary Lawnmower"
Then I am taken to the corresponding PDP
 
Scenario: User clicks clicks 'Save for Later' on PDP
When I click the Save For Later button
When I click the Add To Basket button
 
Scenario: User clicks the basket icon
When I click the Save For Later button
And I click the Add To Basket button
And I click the basket icon
 
Scenario: User clicks 'Clear all' and then cancel
When I click the Save For Later button
And I click the Add To Basket button
And I click Clear All
And I click the Cancel button
 
Scenario: User swipes left on the product item
When I click the Save For Later button
And I click the Add To Basket button
And I swipe left on a product
 
Scenario: User clicks the Checkout button
When I click the Save For Later button
And I click the Add To Basket button
And I swipe left on a product
 
Scenario: User switches back to the current tab
When I click the Save For Later button
And I click the Add To Basket button
And I click back to the current tab
 
Scenario: User clicks the Saved Tab
When I click the Save For Later button
And I click the Add To Basket button
And I click the saved tab
 
Scenario: User clicks 'Clear all' and then cancel
When I click the Save For Later button
And I click the Add To Basket button
And I click Clear All
And I click the Cancel button
 
Scenario: User swipes left on the product item
When I click the Save For Later button
And I click the Add To Basket button
And I swipe left on a product
 
Scenario: User clicks 'Add all to basket'
When I click the Save For Later button
And I click the Add To Basket button
And I click Add all to basket
 
Scenario: User clicks the Basket Tab
When I click the Save For Later button
And I click the Add To Basket button
And I click the basket tab
 
Scenario: User swipes left on the product item and then clicks the Trash button
When I click the Save For Later button
And I click the Add To Basket button
And I swipe left on a product
And I click the trash button