class Create{
Add_Table(){
    cy.get(':nth-child(4) > .open-label').click()
    cy.get(':nth-child(1) > h3').click()
    cy.wait(300)
    cy.get('input[name="label"]').type("Table_Folder")
    cy.wait(3000)
    cy.get('._iconWrapper_10yc5_1').click();
    cy.get('._iconsBlock_10yc5_28 > :nth-child(23)').click();
    cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type("7i");
    cy.wait(1000)
    cy.contains('7i').click();
    cy.wait(1000)
    cy.get('.btns-row > .MuiButtonBase-root').click();

    

    }
}
export default new Create();