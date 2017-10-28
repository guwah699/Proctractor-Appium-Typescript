import { binding, given, then, when, before } from "cucumber-tsflow";
import { browser } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { Utils } from '../../utils';
import { HPColoursPage } from '../../PageObjects/homeprofile/HPColoursPage';

@binding()
class Colourspage {
    private utils = new Utils();
    private colourspage = new HPColoursPage();
    private journeyName = 'Colourpage';

    @then(/^I should be taken to inspiration feed screen$/)
    public iShouldBeTakenToInspirationScreen(callback): void {
        this.utils.takeSS('inspiration-feed', this.journeyName);
        expect(this.colourspage.getInspirationFeed().isPresent()).to.eventually.be.true.and.notify(callback);
    }
}
export = Colourspage;