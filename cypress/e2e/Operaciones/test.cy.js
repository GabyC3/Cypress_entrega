// pageObjects/LoginPage.js
class LoginPage {
    get emailInput() {
        return cy.get('[data-cy=input-email]');
    }

    get passwordInput() {
        return cy.get('[data-cy=input-password]');
    }

    get loginButton() {
        return cy.get('[data-cy=btn-login]');
    }

    get forgotPasswordButton() {
        return cy.get('[data-cy=btn-forgot-password]');
    }

    get registerUserButton() {
        return cy.get('[data-cy=btn-register-user]');
    }

    get registerClientButton() {
        return cy.get('[data-cy=btn-register-client]');
    }

    enterEmail(email) {
        this.emailInput.clear().type(email);
    }

    enterPassword(password) {
        this.passwordInput.clear().type(password);
    }

    clickLogin() {
        this.loginButton.click();
    }

    clickForgotPassword() {
        this.forgotPasswordButton.click();
    }

    clickRegisterUser() {
        this.registerUserButton.click();
    }

    clickRegisterClient() {
        this.registerClientButton.click();
    }
}

// tests/login.spec.js
describe('Login Page Tests', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.visit('https://ticketazo.com.ar/auth/login');
    });

    it('should display the login page', () => {
        cy.title().should('include', 'Ticketazo');
        loginPage.emailInput.should('be.visible');
        loginPage.passwordInput.should('be.visible');
        loginPage.loginButton.should('be.visible');
    });

    it('should allow user to enter email and password', () => {
        const email = 'test@example.com';
        const password = 'password';

        loginPage.enterEmail(email);
        loginPage.enterPassword(password);

        loginPage.emailInput.should('have.value', email);
        loginPage.passwordInput.should('have.value', password);
    });

    it('should login user with valid credentials', () => {
        const email = 'anotherchange@example.com';
        const password = 'validPassword';

        loginPage.enterEmail(email);
        loginPage.enterPassword(password);
        loginPage.clickLogin();

        // Add assertion to verify successful login
        cy.url().should('not.include', '/auth/login'); // Assuming successful login redirects
    });

    it('should not login with invalid credentials', () => {
        const email = 'invalid@example.com';
        const password = 'wrongPassword';

        loginPage.enterEmail(email);
        loginPage.enterPassword(password);
        loginPage.clickLogin();

        // Add assertion for error message
        cy.get('.error-message-selector').should('be.visible'); // Replace with actual error message selector
    });

    it('should navigate to forgot password page', () => {
        loginPage.clickForgotPassword();
        cy.url().should('include', '/auth/forgotPassword');
    });

    it('should navigate to register user page', () => {
        loginPage.clickRegisterUser();
        cy.url().should('include', '/auth/registerUser');
    });

    it('should navigate to register client page', () => {
        loginPage.clickRegisterClient();
        cy.url().should('include', '/auth/registerClient');
    });
});

describe('Register User Tests', () => {       //testIsolation lo resuelve
	beforeEach(() => {
		cy.visit('https://ticketazo.com.ar/auth/registerUser');
	});    
it('Happy Path', () => {
	cy.get('[data-cy=input-nombres]').type('texto random');
	cy.get('[data-cy=input-apellido]').type('texto random ');
	cy.get('[data-cy=input-telefono]').type('35641851');
	cy.get('[data-cy=input-dni]').type('3235415');
    cy.get('[data-cy=select-provincia]').click()
cy.get('[data-cy=select-provincia]').type('Buenos Aires{enter}');
cy.get('[data-cy=select-localidad]').click()
cy.get('[data-cy=select-localidad]').type('Cordoba{enter}');
cy.contains('dd').type('01');
cy.contains('mm').type('01');
cy.contains('aaaa').type('1999');

cy.get('[data-cy=input-email]').type('example@gmail.com');
cy.get('[data-cy=input-confirmar-email]').type('example@gmail.com');
cy.get('[data-cy=input-password]').type('example@gmail.com');
cy.get('[data-cy=input-repetir-password]').type('example@gmail.com ');
cy.get('[data-cy=btn-registrarse]').click();
cy.wait(3000);
});
});


