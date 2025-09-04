
describe('Register User Tests', () => {       
	beforeEach(() => {
		cy.visit('https://ticketazo.com.ar/auth/registerUser');
	});    
it('Primer caso negativo', () => {
	cy.get('[data-cy=input-nombres]').type('Mateo');
	cy.get('[data-cy=input-apellido]').type('Solis ');
	cy.get('[data-cy=input-telefono]').type('3564118512');
	cy.get('[data-cy=input-dni]').type('9235415');
    cy.get('[data-cy=select-provincia]').click()
    cy.get('[data-cy=select-provincia]').type('Buenos Aires{enter}');
    cy.get('[data-cy=select-localidad]').click()
    cy.get('[data-cy=select-localidad]').type('Alberti{enter}');
    cy.contains('dd').type('05');
    cy.contains('mm').type('01');
    cy.contains('aaaa').type('1999');

    cy.get('[data-cy=input-email]').type('example@gmailcom');
    cy.get('[data-cy=input-confirmar-email]').type('example@gmail.com');
    cy.get('[data-cy=input-password]').type('Hags-1253');
    cy.get('[data-cy=input-repetir-password]').type('Hags-1253');
    cy.get('[data-cy=btn-registrarse]').click();
    cy.wait(3000);
  });



it('Segundo caso negativo', () => {
	cy.get('[data-cy=input-nombres]').type('Leo');
	cy.get('[data-cy=input-apellido]').type('Paredes');
	cy.get('[data-cy=input-telefono]').type('351694325');
	cy.get('[data-cy=input-dni]').type('29354158');
    cy.get('[data-cy=select-provincia]').click()
cy.get('[data-cy=select-provincia]').type('Buenos Aires{enter}');
cy.get('[data-cy=select-localidad]').click()
cy.get('[data-cy=select-localidad]').type('Avellaneda{enter}');
cy.contains('dd').type('08');
cy.contains('mm').type('09');
cy.contains('aaaa').type('1992');

cy.get('[data-cy=input-email]').type('example@gmailcom');
cy.get('[data-cy=input-confirmar-email]').type('example@gmail.com');
cy.get('[data-cy=input-password]').type('aKdjj.56');
cy.get('[data-cy=input-repetir-password]').type('aKdjj.56');
cy.get('[data-cy=btn-registrarse]').click();
cy.wait(3000);
});

  
it('Tercer caso negativo', () => {
	cy.get('[data-cy=input-nombres]').type('Sandra');
	cy.get('[data-cy=input-apellido]').type('Torres');
	cy.get('[data-cy=input-telefono]').type('3427125862');
	cy.get('[data-cy=input-dni]').type('37389152');
    cy.get('[data-cy=select-provincia]').click()
cy.get('[data-cy=select-provincia]').type('Chaco{enter}');
cy.get('[data-cy=select-localidad]').click()
cy.get('[data-cy=select-localidad]').type('Lapachito{enter}');
cy.contains('dd').type('15');
cy.contains('mm').type('03');
cy.contains('aaaa').type('2001');

cy.get('[data-cy=input-email]').type('example@gmail.com');
cy.get('[data-cy=input-confirmar-email]').type('example@gmail.com');
cy.get('[data-cy=input-password]').type('asde56');
cy.get('[data-cy=input-repetir-password]').type('asde56');
cy.get('[data-cy=btn-registrarse]').click();
cy.wait(3000);
});

  
it('Cuarto caso negativo', () => {
	cy.get('[data-cy=input-nombres]').type('Manuel');
	cy.get('[data-cy=input-apellido]').type('Caceres');
	cy.get('[data-cy=input-telefono]').type('3567842369');
	cy.get('[data-cy=input-dni]').type('32148962');
    cy.get('[data-cy=select-provincia]').click()
cy.get('[data-cy=select-provincia]').type('Chubut{enter}');
cy.get('[data-cy=select-localidad]').click()
cy.get('[data-cy=select-localidad]').type('Camarones{enter}');
cy.contains('dd').type('22');
cy.contains('mm').type('06');
cy.contains('aaaa').type('1996');

cy.get('[data-cy=input-email]').type('example@gmail.com');
cy.get('[data-cy=input-confirmar-email]').type('example@gmail.com');
cy.get('[data-cy=input-password]').type('kksa488{');
cy.get('[data-cy=input-repetir-password]').type('kksa4887');
cy.get('[data-cy=btn-registrarse]').click();
cy.wait(3000);
});
});