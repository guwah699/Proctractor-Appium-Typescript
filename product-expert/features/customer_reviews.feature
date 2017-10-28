Feature: Display Customer reviews

Background:
Given I am on the first welcome page
When I click the close 'X' icon
When I click the search icon
Then I see an empty search page
When I enter "1000W Rotary Lawnmower"
Then I see a list of search results
When I click "1000W Rotary Lawnmower"

@customerRating1
Scenario: User clicks the yellow star ratings under product image
When I click the stars
Then I am taken to the customer reviews at the bottom of the page

@customerRating2
Scenario: User clicks 'Customer reviews' to go to the detailed reveiws page
When I click Customer reviews
Then I am taken to the detailed reviews page

@customerRating3
Scenario: User clicks 'Show all customer reviews' to go to the detailed reveiws page
When I click Show all customer reviews
Then I am taken to the detailed reviews page

@customerRating4
Scenario: User clicks to expand and collapse a review
When I click more to expand the review
When I click close to collapse the full review
