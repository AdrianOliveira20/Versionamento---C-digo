describe('template spec', () => {
  it('Login com sucesso', () => {
    cy.TipoDispositivo('notebook')
    cy.SubmitLoginForm('papito@webdojo.com','katana123')

    cy.wait(500)

    cy.contains('Fernando Papito')
      .should('be.visible') 
  })

  it('Login com senha incorreto', () =>{
    cy.TipoDispositivo('notebook')
    cy.SubmitLoginForm('papito@webdojo.com','katana12344444')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })

  it('Login com Email incorreto',()=> {
    cy.TipoDispositivo('notebook')
    cy.SubmitLoginForm('errado@gmail.com','katana123')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })

  it('Login com Email e senha incorreto',()=> {
    cy.TipoDispositivo('notebook')
    cy.SubmitLoginForm('papito@webdojo.comaaaaa','katana12aaaaaa3')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })
})