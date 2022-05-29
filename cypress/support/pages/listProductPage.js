import { BasePage } from "./basePage";

export class ListProductPage extends BasePage {
    static clickInShopMenu() {
        BasePage.clickInElement('#menu-item-40')
    }

    static clickInSubCategory(text) {
        BasePage.clickInElementByText('.cat-item-19 > a', text);
    }

    static checkProductIsVisible(text) {
        BasePage.checkElementContainsText('#content', text)
    }
}