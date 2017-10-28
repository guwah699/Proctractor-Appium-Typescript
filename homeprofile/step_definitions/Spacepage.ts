import { binding, given, then, when, before } from "cucumber-tsflow";
import { browser } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { Utils } from '../../utils';
import { HPSpacePage } from '../../PageObjects/homeprofile/HPSpacePage';

 @binding()
 class Spacepage {
     private utils = new Utils();
     private spacepage = new HPSpacePage();
     private journeyName = 'Spacepage';

  @when(/^I select text "([^"]*)"$/)
  public iSelectText (arg1: string, callback) {
     this.utils.clickText(arg1).then(callback);
  }

  @then(/^Next button on "([^"]*)" should be disabled$/)
  public nextButtonShouldBeDisabled(arg1: string, callback) {
     this.utils.takeSS(arg1, this.journeyName);
     expect(this.spacepage.disabledNextButton.isPresent()).to.eventually.be.true.and.notify(callback);
  }

  @then(/^only Living area should be enabled$/)
  public onlyLivingAreaShouldBeEnabled(callback): void {
     this.utils.takeSS('disabled spaces', this.journeyName);
     expect(this.spacepage.disabledSpaces.count()).to.eventually.equal(this.spacepage.totalDisabledSpaces).and.notify(callback);
  }
}
export = Spacepage;