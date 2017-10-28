import { browser, protractor, WebElementPromise} from 'protractor';
import { Config } from './config';
let fs       = require('fs-extra');
let resemble = require('node-resemble-js');
let chai     = require('chai').use(require('chai-as-promised'));
let assert   = chai.assert;

export class Comparison {

    /**
     * Store mismatach threshold for screenshot comparison
     * @property {number} mismatchThreshold
     */
    private mismatchThreshold = 0.000001;
    /**
     * Store config object
     * @property {Config} config
     */ 
    private config: Config;
    
    /** 
    * @class Comparison
    */
    constructor () {
        this.config = new Config();
    }

    /**
     * @method Comparison#compareVisuals
     * @desc Compare screenshots taken throughout the test with those in ref-assets
     * @return WebElementPromise
     **/
    public compareVisuals () {
        var deferredCV = protractor.promise.defer();
        var results  = [];
        var testFolder = this.config.get('testImagesFolder');
        var refFolder = this.config.get('refImagesFolder');
        var diffFolder = this.config.get('diffImagesFolder');
        var self = this;
        var files = fs.readdirSync(testFolder);
        // Take only the images otherwise resember will go haywire
        files = files.filter(function(file) {
            //TODO: use a config value for screenshot type
            return file.substr(-4) === '.png';
        });
        files.forEach(function(imageName) {
                // Bad, The inline function gets redefind inside the loop
                browser.controlFlow().execute(function compareImages() {
                    var message;
                    var deferred = protractor.promise.defer();
                    if (!fs.existsSync(refFolder + imageName)){
                        message = 'Reference image do not exist.'+
                        '</br>The new images is located <a href="../'+testFolder + imageName+'">here</a>';
                        deferred.fulfill({status: false, message: message});
                        return deferred.promise;
                    }
                    resemble(testFolder + imageName).
                    compareTo(refFolder + imageName).
                    onComplete(function(data) {
                        var testResult = data.misMatchPercentage < self.mismatchThreshold;
                        if (!testResult) {
                            message = 'Possible regression in ' + imageName +
                            '</br>The mismatach perecentage is '+data.misMatchPercentage+
                            '</br>The diff images is located <a href="../'+diffFolder + imageName+'">here</a>'+
                            '</br>The original images is located <a href="../'+refFolder + imageName+'">here</a>'+
                            '</br>The new images is located <a href="../'+testFolder + imageName+'">here</a>';
                        }
                         
                        if (!testResult) {
                            data.getDiffImage().pack().pipe(fs.createWriteStream(diffFolder + imageName));
                        }
                        deferred.fulfill({status: testResult, message: message});
                    });
                    
                    return deferred.promise;
                }).then(function(res) {
                    results.push(res);
                    deferredCV.fulfill(results);
                });
  
        });
        return deferredCV.promise;
    }
}

