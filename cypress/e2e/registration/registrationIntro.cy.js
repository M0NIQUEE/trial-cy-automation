import { faker } from '@faker-js/faker';

const email = faker.internet.email();
const password = faker.string.uuid();

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should register a new user account', () => {
    // Click Register button on Home Page
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type('Monique');
    cy.get('[name="lastName"]').type('Nguyen');
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();
    
    // Verify user role, name, url and page title
    cy.get('a p').should('have.text', 'role: user');
    cy.get('h6').should('have.text', 'Monique  Nguyen');
    cy.title().should('eq', 'User: Profile | Delek Homes');
    cy.url().should('include', 'dashboard/user/profile');

    // Click User Icon
    cy.get('button [data-testid="PersonIcon"]').click();
    // Click Logout Button
    cy.contains('Logout').click();

    // Logging into account again after credentials
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    // Click log in button
    cy.contains('Login').click();

    cy.get('a p').should('have.text', 'role: user');
    cy.get('h6').should('have.text', 'Monique  Nguyen');
    //cy.title().should('eq', 'User: Profile | Delek Homes');
    //cy.url().should('include', 'dashboard/user/profile');



  })
})
