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

        cy.get('input[type="file"]')
            .selectFile('./cypress/fixtures/document.pdf', { force: true })

        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
            .type("Testando")


        const techs =[
            'Cypress',
            'Selenium',
            'WebDriverIO',
            'Playwright',
            'RoblotFrameWork'
        ]

        techs.forEach((tech) => {
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
            .type(tech)
            .type('{enter}')

            cy.contains('label', 'Tecnologias')
            .parent()
            .contains('span', tech)
            .should('be.visible')
        })

        cy.contains('label','Li e aceito os')
            .parent()
            .find('input')
            .check()
            .should('be.checked')

        cy.contains('button', 'Enviar formulário')
            .click()

        cy.wait(1000)

        cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
            .should('be.visible')


    })

});

