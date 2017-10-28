import { CommonPage } from '../CommonPage';
import { element, by } from 'protractor';

export class HPLightBox extends CommonPage {
 
    private nextButton = element(by.css('.next-button'));
    private previousButton = element(by.css('.previous-button'));
    private closeButton = element(by.css('.close-button'));

    public getNextButton() {
        return this.nextButton;
    }
    public getPreviousButton() {
        return this.previousButton;
    }
    public getCloseButton() {
        return this.closeButton;
    }
}