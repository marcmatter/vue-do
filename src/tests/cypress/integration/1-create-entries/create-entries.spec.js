const testEntryTitle = 'This is a Cypress Test';

describe('create entries', () => {
  before(() => {
    cy.visit(Cypress.env('host'));
    cy.wait(300);
    localStorage.clear();
  });

  it('login with localstorage', () => {
    cy.get('[data-cy=loginLocallyBtn]').click();
  });

  it('check initial entires', () => {
    cy.get('body').find('.todo-item').should('have.length', 2);
  });

  it('create entry', () => {
    cy.get('[data-cy=addEntryBtn]').click();
    cy.wait(100);
    cy.get('.todo-item .title').eq(0).type(testEntryTitle);
    cy.get('.todo-item .toggle').eq(0).click();
    cy.get('.todo-item [data-cy=entryPrioritySelect]').eq(0).click();
    cy.get('.todo-item [data-cy=entryPrioritySelect]').eq(0).contains('High').click();
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(0).click();
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(0).contains('Work').click();
  });

  it('check new entry', () => {
    cy.get('[data-cy=navCategories] [data-cy=Work]').click();
    cy.get('[data-cy=navPriorities] [data-cy=High]').click();
    cy.get('body').find('.todo-item').should('have.length', 1);
    cy.get('.todo-item .title').should('have.value', testEntryTitle);
  });
});
