class Create{
    edit_Table(){
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').contains("Table_Folder").trigger('mouseover');
        //cy.get(':nth-child(1) > .MuiButtonBase-root > .icon_group').click({ multiple: true });
        //cy.get('span.MuiTypography-root.MuiTypography-body1.MuiListItemText-primary.css-qql987').scrollIntoView();
        //cy.get('span.MuiTypography-root.MuiTypography-body1.MuiListItemText-primary.css-qql987').each(($span) => {
           // cy.wrap($span).scrollIntoView();
         // });
          
          

       
         
        cy.get('div.icon_group.MuiBox-root.css-0').click({ force: true, multiple: true });

        //ccyc.get(':nth-child(1) > h3').click();

        



        
    }
    delete_table(){


    }
    }
    export default new Create();