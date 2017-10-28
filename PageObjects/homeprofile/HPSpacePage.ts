import { CommonPage } from '../CommonPage';
import { element, by } from 'protractor';

export class HPSpacePage extends CommonPage {
 
    public disabledNextButton = element(by.css('.primary.disabled'));
    public disabledSpaces = element.all(by.css('.container.disabled'));
    public totalDisabledSpaces = 7;
    
}