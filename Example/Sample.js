Utils = require('../utils.js'); 

describe('Welcome Screen', function () {

    var utils = new Utils();
	utils.journeyName = 'onboarding';

    //Your Test Name
    it('Your Test Case goes here', function () {
		browser.get('/');
		browser.waitForAngular();
		utils.myFunctionName(0).click();


        })	
	});
