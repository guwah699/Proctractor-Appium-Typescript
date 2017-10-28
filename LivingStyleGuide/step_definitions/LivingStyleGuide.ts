import { binding, given, then, when ,before} from "cucumber-tsflow";
import { browser,element, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { Utils } from '../../utils';

 @binding()
 class LivingStyleGuide {
     private utils = new Utils();
     private currentPage: string;
     private journeyName = 'LivingStyleGuide';

    @then(/^I click the burger menu$/)
    public IClickTheBurgerMenu (callback): void {
        element(by.css('.sidebar-toggle')).click().then(callback);
    }

    @then(/^I screen capture the whole page$/)
    public IBrowseThePage (callback): void {
        var self = this;
        var heightNeeded;
        var oldSize;
        this.utils.screenshot.setBrowserSize();
        browser.executeScript('return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);').then(function(res) {
            heightNeeded = res;
            return browser.driver.manage().window().getSize();   
        }).then(function(res) {
            oldSize = res;
            return browser.driver.manage().window().setSize(res.width, heightNeeded);
        }).then(function() {
             self.utils.screenshot.doTakeSS(self.currentPage, self.journeyName, 'fullsize');
             return browser.driver.manage().window().setSize(oldSize.width, oldSize.height);
        }).then(callback);
    }

    @when(/^I choose "([^"]*)" from the sidebar$/)
    public IChooseFromSidebar (arg1, callback): void {
        this.currentPage = arg1;
        this.utils.clickText(arg1, 'li').then(callback);
    }

 }

 export = LivingStyleGuide;