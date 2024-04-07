class Use{
    Use(){
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
        cy.get('div.dots > svg[style*="color: rgb(168, 168, 168)"]').eq(1).click();
        cy.wait(500)
        cy.get(':nth-child(2) > h3').click()
        cy.wait(500)
        cy.get('input[name="label"]').type("Folder")
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
    export default new Use