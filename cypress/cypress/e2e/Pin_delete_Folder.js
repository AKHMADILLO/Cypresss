class Use{
    Use(){
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
        cy.wait(1000);
        cy.get('path[fill-rule="evenodd"]').click();
        
        
        cy.wait(400);
        
        cy.get('div.dots > svg[style*="color: rgb(168, 168, 168)"]').first().click();



        cy.contains('h3', 'Изменить папку').click();
        cy.wait(300)
        cy.get('input[name="label"]').type("Folder_edited")
        cy.wait(3000)
        cy.get('._iconWrapper_10yc5_1').click();
        cy.get('._iconsBlock_10yc5_28 > :nth-child(25)').click();
        cy.wait(1000);
        cy.get('.btns-row > .MuiButtonBase-root').click();
        cy.wait(1000);
        cy.get('div.dots > svg[style*="color: rgb(168, 168, 168)"]').first().click();




        cy.contains('h3', 'Удалить папку').click();
        cy.wait(1000);
    
    
    
    }
    
    
    
    
    
    
    
    
    }   
    export default new Use