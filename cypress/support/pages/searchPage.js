import { BasePage } from "./basePage";

export class SearchPage extends BasePage {
    static clickInMenuBar(){
        BasePage.clickInElement('#menu-icon');
    }
    static fillSearchInput(value) {
        BasePage.fillValueInInput('#s', value);
    }

    static checkProductIsVisible(text) {
        BasePage.checkElementContainsText('.post-content-inner', text)
    }
}