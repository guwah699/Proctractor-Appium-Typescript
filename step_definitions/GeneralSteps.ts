import { binding, given, then, when ,before, after} from "cucumber-tsflow";
import { browser } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { Utils } from '../utils';

@binding()
class GeneralSteps {

    private utils : Utils;

    @before()
    public beforeEachScenario (callback) {
        this.utils = new Utils();
        this.utils.init(callback);
    }
    
    @after()
    public AfterEachScenario () {
        this.utils.clearLocalStorage();
    }

    @given(/^I test screenshots$/)
    public iTestScreenshots (callback) {
      var self = this;
      this.utils.comparison.compareVisuals().then(function (result) {
          expect(self.utils.checkScreenshotCompareResults(result)).to.equal(true);
          callback();
      });
    }

    @given(/^I check the console output$/)
    public checkConsoleOutput (callback): void {
        browser.driver.manage().logs().get('browser').then(function(data){
            var flag = true;
            var messageArray = [];
            data.forEach(function(element){
                if (element.level.name_ == 'SEVERE') {
                    flag = false;
                    messageArray.push(element.message);
                }
            });
            expect(flag, messageArray).to.be.true;
            callback();
        });
    }

    @when(/^The user navigates back$/)
    public theUserNavigatesBack (callback): void {
        this.utils.browserUtil.clickBack();
        callback();
    }
    
    @when(/^I click on "([^"]*)" button$/)
    public clickOnbutton (arg1, callback): void {
        this.utils.clickButton(arg1).then(callback);
    }

    @when(/^I click on "([^"]*)" KFbutton$/)
    public iClickOnKFButton(arg1: string, callback) {
         this.utils.clickKFButton(arg1).then(callback);
    }    
}
export = GeneralSteps;