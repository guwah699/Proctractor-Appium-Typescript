import { binding, given, then, when ,before} from "cucumber-tsflow";
import { browser } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { Utils } from '../../utils';

 @binding()
 class Homepage {
     private HomePageURL = browser.baseUrl;
     private utils = new Utils();
     private journeyName = 'Homepage';

    @given(/^I should be taken to "([^"]*)" screen$/)
    public iShouldBeTakenToScreen (arg1: string, callback) {
        this.utils.takeSS(arg1, this.journeyName);
        var url = this.HomePageURL+ arg1.toLowerCase();
        expect(browser.getCurrentUrl()).to.eventually.equal(url).and.notify(callback);
    }
   
 }
 export = Homepage;