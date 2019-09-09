describe('Sapper template app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has the correct state', () => {
    cy.contains('div', 'Total clicks: 2')
  })

  it('navigates to /about', () => {
    cy.get('a')
      .contains('about')
      .click()
    cy.url().should('include', '/about')
  })
})
