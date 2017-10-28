exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: "http://devenv01.internal:8000/FEdoc/#",
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
    },
    cucumberOpts: {
        require: ['../build/step_definitions/*.js','../build/LivingStyleGuide/step_definitions/*.js', '../setup.js', '../report.js'],
        format: 'pretty',
        tags: '~@ignore',
        profile: false,
        'no-source': true,
        keepAlive: false
  },
    params: {
        testName: 'LivingStyleGuide',
        isAppTest : false,
        resolutions: {
            large: {
                h: 667 * 2,
                w: 375 * 4
            }
        }
    }
};