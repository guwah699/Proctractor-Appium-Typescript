import { browser, protractor, $, element, by, ElementFinder, ElementHelper, WebElementPromise } from 'protractor';
import { Comparison } from './utils/comparison';
import { Screenshot } from './utils/screenshot';
import { Config } from './utils/config';
import { BrowserUtil } from './utils/browserUtil';

export class Utils {

    private resolutions;
    public comparison : Comparison;
    public screenshot : Screenshot;
    public browserUtil : BrowserUtil;
    public config : Config;

    constructor () {
        this.resolutions = browser.params.resolutions;
        this.browserUtil = new BrowserUtil();
        this.screenshot = new Screenshot();
        this.config = new Config();
        this.comparison = new Comparison();
    }

    /**
     * @method init
     * @desc initialise utils for a journey/scenario/feature
     * @param callback
     */
    public init (callback) : void {
        var self = this;
        this.screenshot.prepareFolders().then(function() {
            if (!browser.params.isAppTest) {
                self.screenshot.setBrowserSize();
            }
            var url=browser.baseUrl;
            if(browser.params.isAppTest) {
                url="";
            }
            browser.get(url).then(callback);
        });
    }

    /**
     * @method takeSS
     * @desc take a screenshot (at all resolutions)
     * @param imageNameArg the name of the screenshot
     **/
    public takeSS (imageNameArg: string, journeyName: string) : void {
        for(var displaySize in this.resolutions) {
            if (!browser.params.isAppTest) {
                this.screenshot.setBrowserSize(displaySize);
            }
            // Disable gifs  to make sure the screen shots are reliable
            this.screenshot.setGifsVisibility(false);
            this.screenshot.doTakeSS(imageNameArg, journeyName, displaySize);
            this.screenshot.setGifsVisibility(true);
        }
        if (!browser.params.isAppTest) {
            this.screenshot.setBrowserSize();
        }
    }


    /**
     * @method clickText
     * @desc click a selected bit of text
     * @param text
     * @param [type=p] selector
     **/
    public clickText (text, type = 'p'): WebElementPromise {
        return this.getNthVisibleProtractorElementByText($(type), text, 0).click();
    }

    /**
     * @method swipe
     * @desc swipe the screen (or a specific element) either left or right
     * @param direction 'left' or 'right' default is right
     * @param cssSelector css selector of area to swipe, default is body
     **/
    public swipe (direction : string, cssSelector = 'body') {
        var amount = direction === 'left' ? -300 : 300;
        return browser.driver.actions()
        .mouseDown(this.getNthVisibleProtractorElement($(cssSelector),0).getWebElement())
        .mouseMove({x: amount, y: 0}) // try different value of x
        .mouseUp()
        .perform();       
    }

    /**
     * @method swipe
     * @desc swipe the screen (or a specific element) either up or down
     * @param direction 'up' or 'down' default is down
     * @param cssSelector css selector of area to swipe, default is body
     **/
    public swipeY (direction : string, cssSelector = 'body') {
        var amount = direction === 'down' ? -300 : 300;
        return browser.driver.actions()
        .mouseDown(this.getNthVisibleProtractorElement($(cssSelector),0).getWebElement())
        .mouseMove({x: 0, y: amount}) // try different value of x
        .mouseUp()
        .perform();       
    }

    /**
     * @method getNthButton
     * @deprecated
     * @desc get the nth button - please dont use this function, it's likely to cause future breakages
     * @param [n=0] which one on the page to use
     **/
    private getNthButton (n = 0) : ElementFinder {
        return this.getNthVisibleProtractorElement($('kf-button'),n);
    }

    /**
     * @method clickKFButton
     * @desc click the button with this text
     * @param text the text the button should contain
     **/
    public clickKFButton(text  : string) : WebElementPromise {
        return this.getNthVisibleProtractorElementByText($('kf-button'), text, 0).click();
    }

    /**
     * @method clickButton
     * @desc click the button with this text
     * @param text the text the button should contain
     **/
    public clickButton(text  : string) : WebElementPromise {
        return this.getNthVisibleProtractorElementByText($('button'), text, 0).click();
    }

        /**
     * @method clickCard
     * @desc click card with this text
     * @param text the card should contain
     **/
    public clickCard (text  : string) : WebElementPromise {
        return this.getNthVisibleProtractorElementByText($('kf-heading'), text, 0).click();
    }

    /**
     * @method clickButtonByClass
     * @desc click the button with this class
     * @param class Name the class of the button 
     **/
    public clickButtonByClass(className  : string) {
        return this.getNthVisibleProtractorElement($('kf-button.'+className), 0).click();
    }

        /**
     * @method clickIconButtonByClass
     * @desc click the button with this class
     * @param class Name the class of the button 
     **/
    public clickIconButtonByClass(className  : string) {
        var selector = 'kf-icon-button.'+className;
        return this.getNthVisibleProtractorElement($(selector), 0).click();
    }

    /**
     * @method clickLink
     * @desc click the link with the given text
     * @param text the text the link should contain
     **/
    public clickLink (text : string, parent?: ElementHelper): WebElementPromise {
        var link;
        if (parent) {
            link = this.getNthVisibleProtractorElementByText($('a'), text, 0, parent);
        } else {
            link = this.getNthVisibleProtractorElementByText($('a'), text, 0);
        }
        return link.click();
    }

    /**
     * @method getNthVisibleProtractorElement
     * @deprecated
     * @desc get the nth element of a particular selector - please dont use this function, it's likely to cause future breakages
     * @param selector the selector to search on
     * @param n which one on the page to use
     * @param [parent] selector to specify a particular parent
     **/
    private getNthVisibleProtractorElement(selector, n : number, parent?: ElementHelper): ElementFinder{
        var allElementsOfSelector;
        if (parent) {
            allElementsOfSelector = parent.all(by.css(selector.locator().value));
        } else {
            allElementsOfSelector = element.all(by.css(selector.locator().value));
        }
        
        return allElementsOfSelector.filter(function(elem) {
            return elem.isDisplayed().then(function(displayedElement){
                return displayedElement;
            });
        }).get(n);
    }

     /**
     * @method getNthVisibleProtractorElementByText
     * @deprecated
     * @desc get the nth element of a particular selector - please dont use this function, it's likely to cause future breakages
     * @param selector the selector to search on
     * @param text the text the element should contain
     * @param [n=0] which one on the page to use
     * @param [parent] selector to specify a particular parent
     **/
    private getNthVisibleProtractorElementByText (selector : ElementFinder, text : string, n = 0, parent?: ElementHelper) {
        var allElementsOfSelector;
        text.replace(/ /g, "");
        if (parent) {
            allElementsOfSelector = parent.all(by.cssContainingText(selector.locator().value, text));
        } else {
            allElementsOfSelector = element.all(by.cssContainingText(selector.locator().value, text));
        }
        return allElementsOfSelector.filter(function(elem) {
            return elem.isDisplayed().then(function(displayedElement){
                return displayedElement;
            });
        }).get(n);
    }

    /**
     * @method getNthField
     * @desc get the nth text field element on the page
     * @param [n=0] which one on the page to use
     **/
    public getNthField (n = 0) {
        return this.getNthVisibleProtractorElement($('kf-input input'),n);
    }

    /**
     * @method checkScreenshotCompareResults
     * @param json JSON object of screenshot status and messages
     * @desc Check json for any faliure and output failure message
     * @return True | False dependant on any failures in the JSON objects
     **/
    public checkScreenshotCompareResults (json) : boolean {
        var falseFlag = true;
        json.forEach(function(jsonString) {
            if(!jsonString.status) {
                falseFlag = false;
                console.log(jsonString.message);
            }
        });
        return falseFlag;
    }
    
    /**
     * @method clearLocalStorage
     * @desc Clear browser's local storage 
     **/
    public clearLocalStorage () : void {
       browser.executeScript('window.localStorage.clear();');
    }   
}