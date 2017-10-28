import { CommonPage } from '../CommonPage';
import { element, by } from 'protractor';

export class HPGoalsPage extends CommonPage {
 
    private optionsSelected = element.all(by.css('.container.selected'));
    private optionsUnselected = 2;

    public optionsSelectedCount() {
        return this.optionsSelected.count();
    }

    public getOptionsUnselected() {
        return this.optionsUnselected;
    }
}