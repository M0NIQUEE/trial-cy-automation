/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should log in with existing account as an admin', () => {
    // Click Login button on Home Page
    cy.get('[href="/auth/login"]').click();
    // Type in email/password
    cy.get('[name="email"]').type('admin@gmail.com');
    cy.get('[name="password"]').type('DontTestMe');
    // Click Login button
    cy.contains('Login').click();

    // Verify user admin role and title
    cy.get('a p').should('have.text', 'role: admin')
    // Verify name
    cy.get('a h6').should('have.text', '')
    cy.title().should('eq', 'User: Profile | Delek Homes')
  })
})
