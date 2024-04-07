class Create{
    Add_Folder(){
        cy.get(':nth-child(4) > .open-label').click()
        cy.get(':nth-child(5) > h3').click()
        cy.wait(300)
        cy.get('input[name="label"]').type("Folder")
        cy.wait(3000)
        cy.get('._iconWrapper_10yc5_1').click();
        cy.get('._iconsBlock_10yc5_28 > :nth-child(23)').click();
        cy.wait(1000);
        cy.get('.btns-row > .MuiButtonBase-root').click();
        
    
        
    
        }
    }
    export default new Create();