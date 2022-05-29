import { BasePage } from "./basePage";

export class SearchPage extends BasePage {
    static clickInMenuBar(){
        BasePage.clickInElement('#menu-icon');
    }
    static fillSearchInput(value) {
        BasePage.fillValueInInputEnter('#s', value);
    }

    static checkProductIsVisible(text) {
        BasePage.checkElementContainsText('#content', text)
    }

    static checkNotFoundMessage() {
        BasePage.checkElementContainsText('#content', 'Sorry, nothing found.');
    }
}