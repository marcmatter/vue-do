describe('filter entries', () => {
  before(() => {
    cy.visit('http://localhost:3000');
    cy.wait(300);
    localStorage.clear();
  });

  it('login with localstorage', () => {
    cy.get('[data-cy=loginLocallyBtn]').click();
  });

  it('check initial entires', () => {
    cy.get('body').find('.todo-item').should('have.length', 2);
  });

  it('add new category', () => {
    cy.get('[data-cy=manageCategories]').click();
    cy.get('[data-cy=addCategoryInput] input').type('Cypress');
    cy.get('[data-cy=addCategoryBtn]').click();
    cy.get('[data-cy=closeCategoryEditorBtn]').click();
  });
});
