import { binding, given, then, when ,before} from "cucumber-tsflow";
import { browser, element,by,$ } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { Utils } from '../../utils';

@binding()
class ProductJourney {

    private utils = new Utils();
    
    @when(/^I click on the first product from the list$/)
    public clickFirstProduct (callback): void {
        expect(element(by.id("Product_0")).isPresent()).to.eventually.be.true.and.notify(function(){
            element(by.id("Product_0")).click().then(callback);     
        });   
    }

    @when(/^I click on text "([^"]*)"$/)
    public clickOnTextProducts (arg1, callback): void {
        //TODO: change this to be dynamic for when the counter stops counting. 
        browser.driver.sleep(3000);
        this.utils.clickText(arg1, 'div').then(callback);
    }

    @when(/^I click on the browse icon$/)
    public clickOnBrowse (callback): void {
        var elements  = element.all(by.xpath("//img[contains(@src,'browse-icon')]"));
        elements.filter(function(element){
            return element.isDisplayed();
        }).first().click().then(callback);
    }

    @when(/^I click on "([^"]*)" hero card$/)
    public clickHeroCard (arg1, callback): void {
        browser.driver.sleep(3000);
        var self=this;
        expect(element(by.cssContainingText('kf-h1', arg1)).isPresent()).to.eventually.be.true.and.notify(function(){
            self.utils.clickText(arg1, 'kf-h1').then(callback);
        });
    }

    @when(/^I should see the Checkout button$/)
    public IShouldSeeCheckoutButton (callback): void {
        expect(element(by.cssContainingText('span', 'Checkout')).isPresent()).to.eventually.be.true.and.notify(callback);
    }

    @when(/^I click on "([^"]*)" sub category Image$/)
    public IClickOnSubCatImage (arg1, callback): void {
        var elements  = element.all(by.css('.category-button'));
        elements.filter(function(element){
            return element.getText() == arg1;
        }).first().click().then(callback);  
    }
}
export = ProductJourney;