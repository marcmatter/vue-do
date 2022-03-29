describe('manage categories', () => {
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

  it('assign entry to new category', () => {
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(1).click();
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(1).contains('Cypress').click();
  });

  it('filter new category', () => {
    cy.get('[data-cy=navCategories] [data-cy=Cypress]').click();
    cy.get('body').find('.todo-item').should('have.length', 1);
    cy.get('[data-cy=navCategories] [data-cy="All Categories"]').click();
  });

  it('check unable to delete category with assigned entry', () => {
    cy.get('[data-cy=manageCategories]').click();
    cy.get('[data-cy="deleteCategoryBtn_Cypress"]').click({ force: true });
    cy.get('[data-cy="deleteCategoryBtn_Cypress"]').realHover();
    cy.get('.popup').contains("can't delete").should('be.visible');
    cy.get('[data-cy=closeCategoryEditorBtn]').click();
  });

  it('delete category', () => {
    cy.get('.todo-item [data-cy=entryCategorySelect] [data-cy=removeSelectValue]').eq(1).click();
    cy.get('[data-cy=manageCategories]').click();
    cy.get('[data-cy="deleteCategoryBtn_Cypress"]').click();
    cy.get('[data-cy="deleteCategoryBtn_Cypress"]').should('not.exist');
  });
});
