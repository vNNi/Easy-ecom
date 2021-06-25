describe('[Scenario] - Home', () => {
  it('Access home!', () => {
    cy.visit('/');
    // assert header
    cy.get('#header');

    // assert all box filters
    cy.get('#Categorias');
    cy.get('#Palavra');
    cy.get('#Visualizados');
    cy.get('#Estilo');
  });
});
