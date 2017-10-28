var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    onPrepare: function() {
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './protractor-results/'
        })
                );
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['SRW_16_GrandOverview_Nav.js'],
    baseUrl: 'http://devenv01.internal:8012',
    useAllAngular2AppRoots: true,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 500000
    }
};