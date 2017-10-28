import { binding, given, then, when, before } from "cucumber-tsflow";
import { browser } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { Utils } from '../../utils';
import { HPInspirationFeed } from '../../PageObjects/homeprofile/HPInspirationFeed';

@binding()
class Inspirationfeed {
    private utils = new Utils();
    private inspirationfeed = new HPInspirationFeed();
    private journeyName = 'InspirationFeed';

    @then(/^there should be "([^"]*)" board cards available$/)
    public thereShouldBeBoardCardsAvailable(arg1: string, callback) {
        expect(this.inspirationfeed.getBoardCards().count()).to.eventually.equal(+arg1).and.notify(callback);  
       }

    @then(/^there should be "([^"]*)" project cards available$/)
    public thereShouldBeProjectCardsAvailable(arg1: string, callback) {
        expect(this.inspirationfeed.getProjectCards().count()).to.eventually.equal(+arg1).and.notify(callback);
       }       
}
export = Inspirationfeed;