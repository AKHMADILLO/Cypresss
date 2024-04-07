class Login {

EnterLogin(){

cy.visit("https://app.u-code.io/login")
cy.wait(2000)
cy.get("input[placeholder='Enter login']").type('epa_admin01').should("have.value","epa_admin01")

}

Enter_Password(){
    cy.get("input[name='password']").type('epa_admin01').should("have.value","epa_admin01")
    cy.wait(300)
}

Click_Enter(){
    cy.get(':nth-child(2) > ._button_19zv0_1').click()
cy.wait(2000)
cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
cy.wait(3000)
cy.get(':nth-child(4) > .css-5030pi > .parent-block > .MuiButtonBase-root > .label > .css-nb2z2f > :nth-child(1) > p').click()
cy.wait(3000)
cy.get('[style="display: flex; align-items: center; gap: 10px; margin-left: 10px;"] > .MuiButton-root').click()
cy.wait(1000)
cy.get('._numberField_15g7s_91').type("1")
cy.wait(1000) 


// Type "test" into the input field
cy.get('#submit').click()

cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click().type('test')
cy.wait(1000)
cy.get('.CTableBody > :nth-child(1) > :nth-child(3)').click().type('test')
cy.wait(1000)
cy.get('.header > .MuiButtonBase-root').click()
cy.wait(2000)
cy.get(':nth-child(2) > :nth-child(5) > .MuiBox-root > .css-13sljp9 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > ._valuesWrapper_15g7s_25 > ._multipleAutocompleteTags_15g7s_12 > ._value_15g7s_21').click()
cy.get(':nth-child(2) > :nth-child(6) > [style="display: flex; gap: 5px; padding: 3px; justify-content: center; align-items: center;"] > .CTableCell > :nth-child(1) > .RectangleIconButton')
  .scrollIntoView().wait(1000)
  .should('be.visible')
  .click();
cy.wait(3000)
}


 
} 
export default new Login();