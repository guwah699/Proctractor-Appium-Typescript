import { binding, given, then, when ,before} from "cucumber-tsflow";
import { browser, element,by,$ } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { Utils } from '../../utils';
import { ExpertHeader } from '../../PageObjects/expert/ExpertHeader';

 @binding()
class ExpertHeaderNavigation {

    private utils = new Utils();
    private expertHeader = new ExpertHeader();
    private journeyName = 'Expert-Header-Navigation';

    @when(/^I click the back arrow back arrow icon$/)
    public ClickBackArrow (callback): void {
        this.expertHeader.clickBackArrow().then(callback);
    }

    @when(/^I click the basket icon$/)
    public ClickBasket (callback): void {
        this.expertHeader.clickBasketButton().then(callback);
    }

    @then(/^I see an empty basket page$/)
    public EmptyBasket (callback): void {
        this.utils.takeSS('Empty Basket Page', this.journeyName);
        expect(element(by.css('.no-items')).isPresent()).to.eventually.be.true.and.notify(callback); 
    }

    @then(/^I see an empty search page$/)
    public EmptySearchPage (callback): void {
        this.utils.takeSS('Empty Search Page', this.journeyName);
        expect(element(by.css('.search-box')).isPresent()).to.eventually.be.true.and.notify(callback);
    }

    @when(/^I click the search icon$/)
    public ClickSearchIcon (callback): void {
        this.expertHeader.clickSearchIcon().then(callback); 
    }

    @when(/^I click X to close the burger menu$/)
    public CloseTheBurgerMenu (callback): void {
        this.utils.takeSS('before closed burger menu', this.journeyName);
        expect(this.expertHeader.getCloseBurgerMenu().isPresent()).to.eventually.be.true;
        //temp hack
        browser.sleep(750);
        this.expertHeader.clickCloseBurgerMenu().then(callback);
    }

    @when(/^I click to open the burger menu$/)
    public OpenTheBurgerMenu (callback): void {
        this.utils.takeSS('before open burger menu', this.journeyName);
        this.expertHeader.clickOpenBurgerMenu().then(callback);
    }

}
export = ExpertHeaderNavigation;