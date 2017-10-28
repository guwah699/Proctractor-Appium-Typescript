import { CommonPage } from '../CommonPage';
import { element, by } from 'protractor';

export class HPInspirationFeed extends CommonPage {
 
    private boardCards = element.all(by.css('.image-box'));
    private projectsCards = element.all(by.css('.footer'));

    public getBoardCards() {
        return this.boardCards;
    }
    public getProjectCards() {
        return this.projectsCards;
    }
}