import { SearchPage } from '../support/pages/searchPage';
describe('test', () => {
    beforeEach(()=> {
        cy.visit('http://practice.automationtesting.in/')
    })
    it('Deve exibir o produto correto ao utilizar a pesquisa', ()=>{
        SearchPage.clickInMenuBar();
        SearchPage.fillSearchInput('Android');
        SearchPage.checkProductIsVisible('Android Quick Start Guide');
    })
})