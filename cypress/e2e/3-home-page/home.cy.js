import chai from 'chai';

describe('empty spec', () => {
  beforeEach('passes', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Text show right display', () =>{
    cy.get('.home').contains('Hello');
  })

  it('Empty input outputs no text', () =>{
    const newItem = '';

    cy.get('.btn').type(`${newItem}{enter}`);

    // const actual = cy.get('span').contains('rytas');

    // eslint-disable-next-line no-unused-expressions
    // expect(actual).to.be.null;
  })
})