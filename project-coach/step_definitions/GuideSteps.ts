import { binding, given, then, when ,before} from "cucumber-tsflow";
import { browser,by,element } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { Utils } from '../../utils';

 @binding()
 class GuideSteps {
    private utils = new Utils();
    private journeyName = 'Guide';

    @given(/^I go to "([^"]*)"$/)
    public WhenIgoTo (arg1, callback): void {
        expect(browser.getCurrentUrl()).to.eventually.equal(arg1).and.notify(callback);
    }

    @when(/^I click on "([^"]*)"$/)
    public IClickOn (arg1, callback): void {
         this.utils.clickLink(arg1).then(callback);
    }


    @when(/^I close overlay$/)
    public WhenICloseOverlay (callback): void {
        this.utils.clickIconButtonByClass('exit').then(callback);
    }

    @when(/^I click on Done$/)
    public WhenIClickOnDone (callback): void {
        var self=this;
        this.utils.clickButtonByClass('done').then(callback);
    }
  
    @when(/^I navigate through substeps$/)
    public WhenINavigateSubstaks (callback): void {
        var self = this;
        (function timer(){
           setTimeout(function(){
               element(by.css('kf-button.next')).isPresent().then(function(res){
                if(res) {
                    self.utils.clickButtonByClass('next').then(function(){
                    timer();
                   });
                } else {
                    callback();
                }
                });
           }, 100);
       })();
    }

    @when(/^I click on a Tile Wall step$/)
    public WhenIClickOnATileWallStep (callback): void {
        this.utils.clickCard('Remove wall tiles').then(callback);

    }
   
    @when(/^I click on characteristics$/)
    public WhenIClickOnChars (callback): void {
        this.utils.clickIconButtonByClass('characteristic-icon').then(callback);
    }

    @when(/^I click on Tools and Materials$/)
    public WhenIClickOnToolsAndMaterials (callback): void {
        this.utils.clickLink('See all tools and materials').then(callback);
    }

    @when(/^filter the overlay$/)
    public WhenIFilter (callback): void {
        var self = this;
        expect(element(by.cssContainingText('a', 'Tools')).isPresent()).to.eventually.be.true.and.notify(callback);                            
        this.utils.clickLink('Tools').then(function() {
            return self.utils.clickLink('All');
        }).then(function () {
            return self.utils.clickLink('Complimentaries').then(callback);
        })
    }
    
    @then(/^I am on the "([^"]*)" page$/)
    public TheIAmOnThe (arg1, callback): void {
        browser.driver.sleep(1000);
        var cssSelector;
        switch(arg1) {
            case 'guideoverview':
                cssSelector = '.kf-card.task-card';
                break;
            case 'My DIY':
                cssSelector = '.counter';
                break;
            case 'stepview':
                cssSelector = '.swiper-scrollbar';
                break;
            case 'home':
                cssSelector = 'kf-hero-image';
                break;
            case 'characteristics':
                cssSelector = 'kf-icon-button';
                break;
            case 'Added to projects':
                cssSelector = '.remove-task';
                break;
            case 'Install toilet roll holder':
                cssSelector = '.card-text';
                break;
            case 'toolsAndMaterials':
                cssSelector = 'kf-link';
                break;
            default:
        }
        expect(element(by.css(cssSelector)).isPresent()).to.eventually.be.true.and.notify(callback);
    }

    @when(/^I scroll until "([^"]*)" is in view$/)
    public WhenIScroll (arg1, callback): void {
        var self=this;
        (function timer(){
           setTimeout(function(){
               element(by.cssContainingText('kf-heading', arg1)).isDisplayed().then(function(res){
                if(!res) {
                    self.utils.swipe('left','kf-swiper-container').then(function(){
                    timer();
                   });
                } else {
                    callback();
                }
                });
           }, 100);
       })();
    }


    @when(/^I click on "([^"]*)" Guide$/)
    public ClicksOnGuides (arg1, callback): void {
        arg1.replace(/ /g, "");
        let elm = element(by.cssContainingText('kf-carousel-card', arg1));
        expect(elm.isPresent()).to.eventually.be.true.and.notify(function() {
         elm.click().then(callback);
        });
        
    }

    @when(/^I click on a "([^"]*)" step$/)
    public ClicksOnSteps (arg1, callback): void {
        arg1.replace(/ /g, "");
        let elm = element(by.cssContainingText('kf-carousel-card', arg1));
       elm.click().then(callback);

    }

    @then(/^I see "([^"]*)" guide$/)
    public iSeeGuide (arg1, callback): void {
         arg1.replace(/ /g, "");
         expect(element(by.cssContainingText('kf-h5',arg1)).isPresent()).to.eventually.be.true.and.notify(callback);
    }
 }

 export = GuideSteps;