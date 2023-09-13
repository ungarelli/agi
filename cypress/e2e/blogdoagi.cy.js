describe('search', () => {
  beforeEach(() => {
    cy.visit('https://blogdoagi.com.br')
    cy.viewport(1920, 1080)
  })
  it.only('search with sucess', () => {
    cy.get('#search-open').click()
    cy.get('.desktop-search > .search-form > label > .search-field').type('Serviços')
    cy.get('input.search-submit:first').click();
    cy.get('.archive-title').should('include.text', 'Resultados da busca por: Serviços');

  })
  it('search with sucess - long text', () => {
    
    
  })
  it('search - results not found', () => {
    
    
  })
})