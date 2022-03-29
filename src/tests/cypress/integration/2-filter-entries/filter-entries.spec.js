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

  it('filter entries state open', () => {
    cy.get('[data-cy=navStates] [data-cy=Open]').click();
    cy.get('body').find('.todo-item').should('have.length', 1);
    cy.get('.todo-item .title').should('have.value', 'Welcome to VueDo!');
  });

  it('filter entries state closed', () => {
    cy.get('[data-cy=navStates] [data-cy=Closed]').click();
    cy.get('body').find('.todo-item').should('have.length', 1);
    cy.get('.todo-item .title').should('have.value', 'Setup VueDo');
    cy.get('[data-cy=navStates] [data-cy="All States"]').click();
  });

  it('filter entries priority high', () => {
    cy.get('[data-cy=navPriorities] [data-cy=High]').click();
    cy.get('body').find('.todo-item').should('not.exist');
    cy.contains('No entries found');
  });

  it('filter entries priority medium', () => {
    cy.get('[data-cy=navPriorities] [data-cy=Medium]').click();
    cy.get('body').find('.todo-item').should('have.length', 2);
  });

  it('filter entries priority low', () => {
    cy.get('[data-cy=navPriorities] [data-cy=Low]').click();
    cy.get('body').find('.todo-item').should('not.exist');
    cy.contains('No entries found');
    cy.get('[data-cy=navPriorities] [data-cy="All Priorities"]').click();
  });

  it('filter entries category school', () => {
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(0).click();
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(0).contains('School').click();
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(1).click();
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(1).contains('School').click();

    cy.get('[data-cy=navCategories] [data-cy=School]').click();
    cy.get('body').find('.todo-item').should('have.length', 2);
    cy.get('[data-cy=navCategories] [data-cy="All Categories"]').click();
  });

  it('filter entries category work', () => {
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(0).click();
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(0).contains('Work').click();
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(1).click();
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(1).contains('Work').click();

    cy.get('[data-cy=navCategories] [data-cy=Work]').click();
    cy.get('body').find('.todo-item').should('have.length', 2);
    cy.get('[data-cy=navCategories] [data-cy="All Categories"]').click();
  });

  it('filter entries category private', () => {
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(0).click();
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(0).contains('Private').click();
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(1).click();
    cy.get('.todo-item [data-cy=entryCategorySelect]').eq(1).contains('Private').click();

    cy.get('[data-cy=navCategories] [data-cy=Private]').click();
    cy.get('body').find('.todo-item').should('have.length', 2);
    cy.get('[data-cy=navCategories] [data-cy="All Categories"]').click();
  });
});
