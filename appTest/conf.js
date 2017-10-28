
    var iOSappLocation     = '';
    var AndroidappLocation = '';


exports.config = {
    seleniumAddress: '',
    useAllAngular2AppRoots : true,

    specs: [
        '../features/*.feature',
        '../product-expert/features/*.feature'
    ],

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['../build/step_definitions/*.js','../build/product-expert/step_definitions/*.js', '../setup.js', '../report.js'],
        tags: '~@ignore',
        format: 'pretty',
    },

    // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js

    baseUrl: '',

    multiCapabilities: [
     { 
        'appium-version': '1.6.3',
        platformName: 'Android',
        platformVersion: '6.0',
        deviceName: 'Samsung Galaxy S6',
        name: 'PE-Android-Structure-AddToBasket-Test',
        browserName: "",
        autoWebview: true,
        fullReset: true,
        app: AndroidappLocation
    }, 
   {    
        'appium-version': '1.5.3',
        platformName: 'iOS',
        platformVersion: '9.3',
        deviceName: 'iPhone 6s Simulator',
        browserName: "",
        autoWebview: true,
        fullReset: true,
        name: 'ProductExpert-iOS9.3-iPhone6s-Header-Nav-Test',
        language :"en",
        locale: "GB",
        app: iOSappLocation

   },
   {
       'appium-version': '1.5.3',
        platformName: 'iOS',
        platformVersion: '9.3',
        deviceName: 'iPhone 6s Simulator',
        browserName: "",
        autoWebview: true,
        fullReset: true,
        name: 'ProductExpert-iOS9.3-iPhone6 Plus-Header-Nav-Test',
        language :"en",
        locale: "GB",
        app: iOSappLocation
   }, 
   { 
        'appium-version': '1.5.3',
        platformName: 'Android',
        platformVersion: '5.0',
        deviceName: 'Android Emulator',
        name: 'PE-Android-Structure-AddToBasket-Test',
        browserName: "",
        autoWebview: true,
        fullReset: true,
        app: AndroidappLocation,

    } 
    ],


    params: {
        testName: 'appTest',
        isAppTest : true,
    },

    // configuring wd in onPrepare
    // wdBridge helps to bridge wd driver with other selenium clients
    // See https://github.com/sebv/wd-bridge/blob/master/README.md
    onPrepare: function () {
        var wd = require('wd'),
            protractor = require('protractor'),
            wdBridge = require('wd-bridge')(protractor, wd);

        wdBridge.initFromProtractor(exports.config);

        var defer = protractor.promise.defer();
        browser.ignoreSynchronization = true;

        browser.manage().timeouts().implicitlyWait(10000);
        browser.executeScript('return window.location;').then( function(location){
            browser.resetUrl = 'file://';
            browser.baseUrl = location.origin + location.pathname;
            defer.fulfill();
        });

        return defer.promise;
    }
};