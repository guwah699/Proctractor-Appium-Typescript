import { CommonPage } from '../CommonPage';
import { element, by } from 'protractor';

export class HPColoursPage extends CommonPage {
 
    private inspirationFeed = element(by.className('router-link-active'));

    public getInspirationFeed() {
        return this.inspirationFeed;
    }
}