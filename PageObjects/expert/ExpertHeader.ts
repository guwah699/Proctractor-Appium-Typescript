import { CommonPage } from '../CommonPage';
import { element, by } from 'protractor';

export class ExpertHeader extends CommonPage {
    private backArrow       = element(by.css('kf-icon-button[name=back]'));
    private basketButton    = element(by.css('kf-basket-button'));
    private searchIcon      = element(by.css('kf-icon-button[name=search]'));
    private closeBurgerMenu = element(by.css('kf-icon-button[name=close_x]'));
    private openBurgerMenu  = element(by.css('kf-icon-button[name=menu]'));

    public clickBackArrow() {
        return this.backArrow.click();
    }

    public clickBasketButton() {
        return this.basketButton.click();
    }

    public clickSearchIcon() {
        return this.searchIcon.click();
    }

    public clickCloseBurgerMenu() {
        return this.closeBurgerMenu.click();
    }

    public clickOpenBurgerMenu() {
        return this.openBurgerMenu.click();
    }
    
    public getCloseBurgerMenu() {
        return this.closeBurgerMenu;
    }
}