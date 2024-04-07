class Use{
    Use(){
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
        cy.get('div.dots > svg[style*="color: rgb(168, 168, 168)"]').eq(1).click();
        cy.wait(500)
        cy.get(':nth-child(3) > h3').click()
        cy.wait(300)
        cy.get('input[name="label"]').type("Mickrofrontend")
        cy.wait(3000)
        cy.get('._iconWrapper_10yc5_1').click();
        cy.get('._iconsBlock_10yc5_28 > :nth-child(25)').click();
        cy.wait(1000);
        cy.get('div.MuiSelect-select').click()
        cy.get('li.MuiMenuItem-root[data-value="80ace0fc-97f9-421b-b024-561793062909"]').click();


        cy.get('.btns-row > .MuiButtonBase-root').click();
    
    }
    
    
        
    
    
    
    
    }   
    export default new Use