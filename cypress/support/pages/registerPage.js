import { BasePage } from "./basePage";

export class RegisterPage extends BasePage {
    static clickInRegisterMenu() {
        BasePage.clickInElement('#menu-item-50"');
    }

    static clickInRegisterBtn() {
        BasePage.clickInElement('input[name="register"]')
    }

    static clickInAccountDetails() {
        BasePage.clickInContainsText('Account Details')
    }

    static clickInSaveBtn() {
        BasePage.clickInElement('input[name="save_account_details"]')
    }

    static fillRegisterEmailInput(email) {
        BasePage.fillValueInInput('#reg_email', email);
    }

    static fillRegisterPswInput(psw) {
        BasePage.fillValueInInput('#reg_password', psw);
    }

    static fillFirstNameInput(name) {
        BasePage.fillValueInInput('#account_first_name', name)
    }

    static fillLastNameInput(lastName) {
        BasePage.fillValueInInput('#account_last_name', lastName)
    }
}