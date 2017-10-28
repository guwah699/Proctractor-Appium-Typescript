exports.config = {
    seleniumAddress: '',
    baseUrl: "http://devenv01.internal:8012/",
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
         'name': 'coach'
     },{
         'browserName': 'chrome',
         'platform': 'Windows 10',
         'version': '53.0',
         'name': 'coach'
    },{
         'browserName': 'internet explorer',
         'platform': 'Windows 10',
         'version': '11.103',
         'name': 'coach'
    },{
        'browserName': 'safari',
         'platform': 'OS X 10.11',
         'version': '9.0',
         'name': 'coach'
    }],
    cucumberOpts: {
        require: ['../build/step_definitions/*.js','../build/project-coach/step_definitions/*.js', '../setup.js', '../report.js'],
        format: 'pretty',
        tags: '~@ignore',
        profile: false,
        'no-source': true,
        keepAlive: false
  },
    params: {
        testName: 'coach',
        isAppTest : false,
        resolutions: {
            small: {
                h: 900,
                w: 599
            },
            medium: {
                h: 899,
                w: 600 
            },
            large: {
                w: 1200,
                h: 1799
            }
        }
    }
};