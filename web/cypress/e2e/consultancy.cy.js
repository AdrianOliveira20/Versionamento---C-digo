describe('Formulário de Consultoria', () => {
    it('Deve solicitar consultoria individual', () => {

        cy.SubmitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')
        cy.get('input[placeholder="Digite seu nome completo"]').type("Adrian Oliveira")
        cy.get('input[placeholder = "Digite seu email"]').type("adrian.enzo.gyn@gmail.com")
        cy.get('input[placeholder = "(00) 00000-0000"] ')
            .type("62 99325-8343")
            .should('have.value', '(62) 99325-8343')
        
        cy.get('#consultancyType').select('Individual')
            .should('not.be.null')

        cy.contains('span', 'Pessoa Física')
            .parent()
            .find('input')
            .check()
            .should('be.checked')
        
        cy.contains('span', 'Pessoa Jurídica')
            .parent()
            .find('input')
            .should('not.be.checked')
        
        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type("123.456.789-00")
            .should('have.value', '123.456.789-00')


        const discoveryChannels = ['Instagram','LinkedIn','Udemy','YouTube','Indicação de Amigo']

        discoveryChannels.forEach((channel) => {
             cy.contains('label', channel)
            .find('input')
            .check()
            .should('be.checked')
        })


    })

});

