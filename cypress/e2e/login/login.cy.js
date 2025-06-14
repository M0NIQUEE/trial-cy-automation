// Should access into the static webpage added in cypress.config
describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should log in with existing account', () => {
        // Since the website directly enters into log in page
        // must insert credentials for log in
        // credentials are given in jira
        cy.get('[name="email"]').type('demoTrialStudent02+1@gmail.com');
        cy.get('[name="password"]').type('YfimedoCDemo02!');

        
    })
})