import { SearchPage } from '../support/pages/searchPage';
describe('test', () => {
    beforeEach(()=> {
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
})