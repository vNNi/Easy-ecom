describe('[Scenario] - Search', () => {
  it('Access Search page!', () => {
    cy.visit('/search/iphone');
    // assert header
    cy.get('#header');

    // assert form
    cy.get('#input-search');

    // assert title
    cy.get('h1').contains('Página de Busca!');
  });
});
