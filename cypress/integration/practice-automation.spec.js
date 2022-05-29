import { SearchPage } from '../support/pages/searchPage';
import { ListProductPage } from '../support/pages/listProductPage';
import { RegisterPage } from '../support/pages/registerPage';
import { RegisterDataFactory } from '../factory/register-data';
const dataFactory = new RegisterDataFactory();
describe('Automation Practice Site', () => {
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
        const data = dataFactory.generate();
        SearchPage.clickInMenuBar();
        RegisterPage.clickInRegisterMenu();
        RegisterPage.fillRegisterEmailInput(data.email);
        RegisterPage.fillRegisterPswInput(data.password);
        RegisterPage.clickInRegisterBtn();
        RegisterPage.clickInAccountDetails();
        RegisterPage.fillFirstNameInput(data.firstName);
        RegisterPage.fillLastNameInput(data.lastName);
        RegisterPage.clickInSaveBtn();
    })
})