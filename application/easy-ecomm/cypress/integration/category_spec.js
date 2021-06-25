describe('[Scenario] - Category', () => {
  it('Access Category page!', () => {
    cy.visit('/category/te');
    // assert header
    cy.get('#header');

    // assert form
    cy.get('#input-search');

    cy.get('h1').contains('Página de Categoria!');
  });
});
