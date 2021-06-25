describe('[Scenario] - Product', () => {
  it('Get a not found message', () => {
    cy.visit('/product/not_found');
    // assert not found
    cy.get('h2').contains('Produto não encontrado :(');
  });

  it('Found page', () => {
    cy.visit('/product/1');

    // assert header
    cy.get('#header');

    // assert title
    cy.get('h1');

    // assert has price
    cy.get('#price');

    // assert buy button
    cy.get('#buy-button');
  });
});
