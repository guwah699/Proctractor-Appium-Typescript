import { binding, given, then, when ,before} from "cucumber-tsflow";
import { browser, element,by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { Utils } from '../../utils';

 @binding()
 class ExpertwelcomePages {

    private utils = new Utils();
    private journeyName = 'Expert-Welcome-Pages';

    @given(/^I am on the first welcome page$/)
      public FirstWelcomePage (next): void {
        expect(element(by.xpath("//div[contains(@style,'welcome-slide-1.jpg')]")).isPresent()).to.eventually.be.true.and.notify(next);
      }

    @when(/^I click the 'Let's Go' button on the last page$/)
    public ClickLetsGoButton (next): void {
        var letsGo = element(by.id('Lets_Go'));
        expect(letsGo.isPresent()).to.eventually.be.true;
        letsGo.click().then(next);
    }

    @then(/^I should see the motivation home page$/)
    public MotivationHomePage (next): void {
        this.utils.takeSS('Motivation Page', this.journeyName);
        expect(element(by.css('.image-recognition-image')).isPresent()).to.eventually.be.true.and.notify(next);   
    }

    @when(/^I click the close 'X' icon$/)
    public ClickXToClose (next): void {
        element(by.css('.move-to-home')).click().then(next); 
    }

    @when(/^I scroll past a welcome page$/)
    public ScrollToSecondWelcomePage (next): void {
        this.utils.swipe('left').then(next);
    }

}
export = ExpertwelcomePages;