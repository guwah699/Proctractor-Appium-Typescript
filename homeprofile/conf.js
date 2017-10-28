exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: "http://devenv01.internal:8031/",
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
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: [
                '--start-maximized'
            ]
        }
    },
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