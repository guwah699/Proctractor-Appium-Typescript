import { CommonPage } from '../CommonPage';
import { element, by } from 'protractor';

export class ExpertProductPage extends CommonPage {
    private showAllCustomerReviews = element(by.css('.review-module-footer-link'));
    private customerReviews = element(by.css('.review-module-header'));
    private reviewStars = element(by.css('kf-customer-reviews-rating[tappable]'));

    public clickShowAllCustomerReviews () {
        return this.showAllCustomerReviews.click();
    }

    public clickCustomerReviews() {
        return this.customerReviews.click();
    }
    
    public clickReviewStars() {
        return this.reviewStars.click();
    }
}