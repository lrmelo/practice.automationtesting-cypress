import { SearchPage } from '../support/pages/searchPage';
import { ListProductPage } from '../support/pages/listProductPage';
import { RegisterPage } from '../support/pages/registerPage';
describe('test', () => {
    beforeEach(()=> {
        cy.viewport(1000, 720)
        cy.visit('http://practice.automationtesting.in/')
    })
    it('Deve exibir o produto correto ao pesquisar por Android', ()=>{
        SearchPage.clickInMenuBar();
        SearchPage.fillSearchInput('Android');
        SearchPage.checkProductIsVisible('Android Quick Start Guide');
    });

    it('Deve exibir uma mensagem especifica para produtos inexistentes', ()=>{
        SearchPage.clickInMenuBar();
        SearchPage.fillSearchInput('itemNãoExistente');
        SearchPage.checkNotFoundMessage();
    })

    it('Deve listar os produtos de uma determinada subcategoria', ()=> {
        SearchPage.clickInMenuBar();
        ListProductPage.clickInShopMenu();
        ListProductPage.clickInSubCategory('HTML');
        ListProductPage.checkProductIsVisible('Thinking in HTML');
    })

    it('Deve efetuar um cadastro com sucesso', ()=> {
        SearchPage.clickInMenuBar();
        RegisterPage.clickInRegisterMenu();
        RegisterPage.fillRegisterEmailInput();
        RegisterPage.fillRegisterPswInput();
        RegisterPage.clickInRegisterBtn();
        RegisterPage.clickInAccountDetails();
        RegisterPage.fillFirstNameInput();
        RegisterPage.fillLastNameInput();
    })
})