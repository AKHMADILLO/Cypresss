class Use{
    Use(){
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
        cy.get('svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-10dohqv[aria-hidden="true"][viewBox="0 0 24 24"][data-testid="AddIcon"][size="13"]').click();
        cy.wait(500)
        cy.get(':nth-child(6) > h3').click()
        cy.wait(300)
        cy.get('input[name="label"]').type("Folder")
        cy.wait(3000)
        cy.get('._iconWrapper_10yc5_1').click();
        cy.get('._iconsBlock_10yc5_28 > :nth-child(23)').click();
        cy.wait(1000);
        cy.get('.btns-row > .MuiButtonBase-root').click();
    
    }
    
    
    
    
    
    
    
    
    }   
    export default new Use