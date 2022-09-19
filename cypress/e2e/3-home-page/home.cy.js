import chai from 'chai';

describe('empty spec', () => {
  beforeEach('passes', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Text show right display', () =>{
    cy.get('.home').contains('Hello');
  })

  it('Text input outputs display', () =>{
    const newItem = 'Labas';

    cy.get('.input-text').type(`${newItem}`);
    cy.get('.btn').click();

    cy.contains('rytas');

    // eslint-disable-next-line no-unused-expressions
    // expect(actual).to.be.null;
  })

  it('Empty text input outputs no display', () =>{

    cy.get('.btn').click();

    cy.contains('rytas').should('not.exist');

    // eslint-disable-next-line no-unused-expressions
    // expect(actual).to.be.null;
  })
})