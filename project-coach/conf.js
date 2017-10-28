exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: "http://devenv01.internal:8011/",
    specs: ['*.js'],
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
   require: ['../build/step_definitions/*.js','../build/project-coach/step_definitions/*.js', '../setup.js', '../report.js'],
    format: 'pretty',
    tags: ['~@ignore', '@smoke'],
    profile: false,
    'no-source': true,
    keepAlive: false
  },


    params: {
        testName: 'project-coach',
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
                h: 1799,
                w: 1200
            }
        }
    }
};