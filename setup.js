var configure = function () {
    this.setDefaultTimeout(60 * 1000);

    this.After(function (scenario, callback) {
    if (scenario.isFailed() && !browser.params.isAppTest && (scenario.getName() != 'Screenshot Testing' && scenario.getName() != 'Console Testing')) {
          browser.takeScreenshot().then(function (png) {
            var decodedImage = new Buffer(png.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
            scenario.attach(decodedImage, 'image/png');
            callback();
        });
    } else {
        callback();
    }
    });
};




module.exports = configure;