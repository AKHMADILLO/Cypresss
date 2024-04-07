class Create{
    Add_Microfrontend(){
        cy.get(':nth-child(4) > .open-label').click()
        cy.get('.menu > :nth-child(2) > h3').click()
        cy.wait(300)
        cy.get('input[name="label"]').type("Microfrontend_Folder")
        cy.wait(3000)
        cy.get('._iconWrapper_10yc5_1').click();
        cy.get('._iconsBlock_10yc5_28 > :nth-child(23)').click();
        cy.get('.MuiSelect-select').click();
        cy.get('.MuiList-root > [tabindex="0"]').click();
        cy.wait(1000)
        
        cy.get('.btns-row > .MuiButtonBase-root').click();
        
    
        
    
        }
    }
    export default new Create();