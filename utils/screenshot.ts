import {Config}  from './config';
import { browser, protractor } from 'protractor';
let fs = require('fs-extra');

/** 
 * @class Screenshot
*/
export class Screenshot {
    private screensCount = 0;
    private defaultResolution = 'large';
    private folderRunKey = 'HasRunPrepareFolders';
    private resolutions;
    private config;

    constructor () {
        this.resolutions = browser.params.resolutions;
        this.config = new Config();
    }

    private getOperatingSystem(): string {
        var osString = process.platform;
        if (osString.indexOf('win') !== -1) {
            return 'Windows';
        } else {
            return 'Unix';
        }
    }
    /**
     * @method Screenshot#prepareFolders
     * @desc ensure folders are perpared for storing screenshots during tests
     * @return void
     **/
    public prepareFolders() {
        var promise = protractor.promise.defer();
        if (!this.config.get(this.folderRunKey)) {
            var testName = browser.params.testName;
            var self = this;
            var opS;
            var browserName;

            browser.getProcessedConfig().then(function (data) {
                if (browser.params.isAppTest) {
                    opS = data.capabilities.platformName;
                    browserName = data.capabilities.platformVersion;
                } else {
                    opS = self.getOperatingSystem();
                    browserName = data.capabilities.browserName;
                }
                [{
                    name: 'testImagesFolder',
                    path: '/test-assets/'
                }, {
                    name: 'diffImagesFolder',
                    path: '/diff-assets/'
                }].forEach(function(folderMeta, i) {
                    self.config.set(folderMeta.name, '../reports' + folderMeta.path + '/' + opS + '/' + browserName + '/' + testName + '/');
                    fs.mkdirs(self.config.get(folderMeta.name), function (err) {
                        if (err) return console.error(err)
                    });

                    for (var displaySize in this.resolutions) {
                        self.defaultResolution = displaySize;
                    }
                }.bind(self));
                self.config.set('refImagesFolder', './ref-assets/' + opS + '/' + browserName + '/' + testName + '/');
                fs.mkdirs(self.config.get('refImagesFolder'), function (err) {
                    if (err) return console.error(err)
                });
                fs.mkdirs('../reports/' + opS + '/' +browserName);
                promise.fulfill();
            });
            this.config.set(this.folderRunKey, true);
        } else {
            promise.fulfill();
        }
        return promise;
    }
    /**
     * @method Screenshot#doTakeSS
     * @desc take screenshot and store it under the current test suite > test assets > screensize - journeyname.png
     * @param imageNameArg identified for image name
     * @param screensize screensize identifier
     * @return full path of image
     **/
    public doTakeSS (imageNameArg: string, journeyName: string, screenSize : string) : string {
        var screenPath = '';
        if (!browser.params.isAppTest) {
            screenPath = this.config.get('testImagesFolder')
                + screenSize + '-' + journeyName + '-' + imageNameArg +
                '.png';
            var self = this;
            browser.driver.sleep(this.config.get('stabalizationDelay'));
            var deferred = protractor.promise.defer();
            browser.takeScreenshot().then(function (png) {
                var res = fs.existsSync(screenPath);
                if (res) {
                    var increment = self.config.get(screenPath);
                    if (increment == null) {
                        increment =1;
                    } else {
                        increment++;
                    }
                    self.config.set(screenPath, increment);
                    var position = screenPath.indexOf('.png');
                    screenPath = [screenPath.slice(0, position), increment, screenPath.slice(position)].join('');
                }
                var stream = fs.createWriteStream(screenPath);
                stream.write(Buffer.from(png, 'base64'));
                stream.end(function(){
                    deferred.fulfill();
                });
            });
        }
              
        return screenPath;
    }
    /**
     * @method Screenshot#setGifsVisibility
     * @desc show or hide .gif images
     * @param show boolean true for visible false for hidden
     * @return void
     **/
    public setGifsVisibility (show : boolean) {
        var propertyValue = !show ? 'hidden' : 'visible';
        browser.executeScript(
                'for(var images=document.images,imageLength=images.length,i=0;imageLength>i;i++)images[i].src.endsWith(".gif")&&(images[i].style.visibility="%propertyValue%");'
                .replace("%propertyValue%",propertyValue));
    }

    /**
     * @method Screenshot#setBrowserSize
     * @desc change the browser size
     * @param screenName recognised screename set in the conf.js usally small medium or large
     * @return void
     **/
    public setBrowserSize (screenName = this.defaultResolution) : void {
        browser.driver.manage().window().setSize(this.resolutions[screenName].w, this.resolutions[screenName].h).then(function () {
            return browser.executeScript('window.scrollTo(0, 0)');
        });
    }
}