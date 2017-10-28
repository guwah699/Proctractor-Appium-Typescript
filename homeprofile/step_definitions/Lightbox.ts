import { binding, given, then, when ,before} from "cucumber-tsflow";
import { browser } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { Utils } from '../../utils';
import { HPInspirationFeed } from '../../PageObjects/homeprofile/HPInspirationFeed';
import { HPLightBox } from '../../PageObjects/homeprofile/HPLightBox';

 @binding()
 class Lightbox {
     private utils = new Utils();
     private journeyName = 'Lightbox';
     private inspirationfeed = new HPInspirationFeed();
     private lightbox = new HPLightBox();

     @when(/^I click on board card$/)
     public iClickOnBoardCard(callback): void {
        this.inspirationfeed.getBoardCards().get(0).click().then(callback);
     }     

     @when(/^I click on "([^"]*)" arrow$/)
     public iClickOnArrow(arg1: string, callback) {
        if(arg1=='next') {
            this.lightbox.getNextButton().click().then(callback);
        }
        else {            
            this.lightbox.getPreviousButton().click().then(callback);
        }
     }

     @then(/^it should display "([^"]*)" arrow$/)
     public itShouldDisplayArrow(arg1: string, callback) {
        expect(this.lightbox.getPreviousButton().isDisplayed()).to.eventually.be.true.and.notify(callback);
     }

     @then(/^it should not display "([^"]*)" arrow$/)
     public itShouldNotDisplayArrow(arg1: string, callback) {
        expect(this.lightbox.getPreviousButton().isDisplayed()).to.eventually.be.false.and.notify(callback);
     }
    
     @when(/^I click on icon Close$/)
     public iClickOnIcon(callback): void {
        this.lightbox.getCloseButton().click().then(callback);
     }
 } 
 export = Lightbox;