/* eslint-disable no-undef */
import moment from 'moment'
describe('Anecdotes', () => {

  const second = moment().get('minute')
  const anecdote = `Cypress test anecdote ${second}`

  beforeEach(() => {
    cy.visit('http://localhost:5000')
    cy.intercept('GET', '**/anecdotes').as('getAnecs')
  })

  it('front page can be opened', () => {
    cy.contains('Anecdotes')
    cy.contains('create new')
  })

  it('can filter out anecdotes', () => {
    cy.wait(2000)
    cy.contains('If it hurts, do it more often').should('exist')
    cy.get('input').eq(0).type('xxxx').blur()
    cy.contains('If it hurts, do it more often').should('not.exist')
    cy.get('input').eq(0).clear().blur()
    cy.contains('If it hurts, do it more often').should('exist')
  })

  it('can create new anecdote', () => {
    cy.wait(1000)
    cy.get('input').eq(1).type(anecdote).blur()
    cy.get('button').contains('create').click()
    cy.wait(1000)
    cy.contains(anecdote)
  })
})