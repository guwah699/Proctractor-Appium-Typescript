exports.config = {
    seleniumAddress: '',
    baseUrl: "http://devenv01.internal:8032/",
    useAllAngular2AppRoots: true,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    ignoreUncaughtExceptions: true,
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        './features/*.feature',
        '../features/*.feature'
    ],
    multiCapabilities: [
     { 
         'browserName': 'firefox',
         'platform': 'Windows 10',
         'version': '50.0',
         'name': 'homeprofile'
     },{
         'browserName': 'chrome',
         'platform': 'Windows 10',
         'version': '53.0',
         'name': 'homeprofile'
    },{
         'browserName': 'internet explorer',
         'platform': 'Windows 10',
         'version': '11.103',
         'name': 'homeprofile'
    },{
        'browserName': 'safari',
         'platform': 'OS X 10.11',
         'version': '9.0',
         'name': 'homeprofile'
    }],
    cucumberOpts: {
        require: ['../build/step_definitions/*.js','../build/homeprofile/step_definitions/*.js', '../setup.js', '../report.js'],
        format: 'pretty',
        tags: '~@ignore',
        profile: false,
        'no-source': true,
        keepAlive: false
  },
    params: {
        testName: 'homeprofile',
        isAppTest : false,
        resolutions: {
            large: {
                w: 1200,
                h: 900
            }
        }
    }
};