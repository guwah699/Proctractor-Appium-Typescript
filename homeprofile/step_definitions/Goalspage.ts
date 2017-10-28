import { binding, given, then, when, before } from "cucumber-tsflow";
import { browser } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { Utils } from '../../utils';
import { HPGoalsPage } from '../../PageObjects/homeprofile/HPGoalsPage';

@binding()
class Goalspage {
    private utils = new Utils();
    private goalspage = new HPGoalsPage();
    private journeyName = 'Goalspage';

    @then(/^only two options left unselected$/)
    public onlyTwoOptionsShouldBeSelected(callback): void {
        this.utils.takeSS('Multi Selection', this.journeyName);
        expect(this.goalspage.optionsSelectedCount()).to.eventually.equal(this.goalspage.getOptionsUnselected()).and.notify(callback);
    }
}
export = Goalspage;