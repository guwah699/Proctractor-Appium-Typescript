import { binding, given, then, when ,before} from "cucumber-tsflow";
import { browser, element,by,$,protractor } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { Utils } from '../../utils';
import { ExpertProductPage } from '../../PageObjects/expert/ExpertProductPage';

 @binding()
class CustomerReviews {
    private utils = new Utils();
    private productPage = new ExpertProductPage();
    private journeyName = 'Expert-Customer-Review';
    
    @then(/^I am taken to the detailed reviews page$/)
    public TakenToDetailedReviewsPage (callback): void {
        this.utils.takeSS('Detailed Reviews Page', this.journeyName);
        expect(element(by.css('.customer-reviews-container')).isPresent()).to.eventually.be.true.and.notify(callback);
    }

    @when(/^I click Show all customer reviews$/)
    public ClickShowAllCustomerReviews (callback): void {
        this.productPage.clickShowAllCustomerReviews().then(callback);
    }

    @when(/^I click "([^"]*)"$/)
    public ClickProduct (arg1, callback): void {
        element(by.cssContainingText('kf-h6',arg1)).click().then(callback);
    }

    @then(/^I see a list of search results$/)
    public SeeSearchResults (callback): void {
        this.utils.takeSS('Search Results', this.journeyName);
        expect(element(by.css('.product-counter-wrapper-title')).isPresent()).to.eventually.be.true.and.notify(callback);
    }

    @when(/^I enter "([^"]*)"$/)
    public EnterProductName (arg1, callback): void {
        this.utils.getNthField(0).sendKeys(arg1);
        var enter = browser.actions().sendKeys(protractor.Key.ENTER);
        enter.perform().then(callback);
    }

    @when(/^I click Customer reviews$/)
    public ClickCustomerReviews (callback): void {
        this.productPage.clickCustomerReviews().then(callback);
    }

    @then(/^I am taken to the customer reviews at the bottom of the page$/)
    public TakenToCustomerReviews (callback): void {
        this.utils.takeSS('PDP - Customer Reviews', this.journeyName);
        expect(element(by.css('.review-module-header')).isPresent()).to.eventually.be.true.and.notify(callback);
    }

    @when(/^I click the stars$/)
    public ClickTheStars (callback): void {
        this.productPage.clickReviewStars().then(callback);
    }

    @when(/^I click more to expand the review$/)
    public ClickMoreToExpandReview (callback): void {
        var self = this;
        this.utils.clickLink('More').then(function () {
            self.utils.takeSS('PDP - Customer Review Expanded', self.journeyName);
            callback();
        });
    }
 
    @when(/^I click close to collapse the full review$/)
    public ClickCloseToCollapseFullReview(callback): void {
        var self = this;
        this.utils.clickLink('Close').then(function () {
            self.utils.takeSS('PDP - Customer Review Collasped', self.journeyName);
            callback();
        });
    }

}
export = CustomerReviews;