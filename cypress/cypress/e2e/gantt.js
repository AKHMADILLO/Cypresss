class Add_1{
    add(){
        cy.get('span.MuiTypography-root.MuiTypography-body1.MuiListItemText-primary.css-qql987').click();
        cy.get(':nth-child(1) > .FiltersBlock > :nth-child(1) > ._selector_njkjb_1 > ._element_njkjb_5').click();
        cy.wait(3000);
        cy.get('._left_oha17_4 > :nth-child(4)').click();
        cy.get('._button_oha17_49 > .MuiButtonBase-root').click();
        cy.wait(2000)
        cy.get('input[name="name"]').type('GANTT');
        cy.get('input[name="default_limit"]').type('10');
        cy.wait(500);
       
        cy.get('.react-tabs__tab-list').contains('Quick filters').click();
        cy.get('.react-tabs__tab-list').contains('Columns').click();
        cy.get('.react-tabs__tab-list').contains('Navigation').click();
        cy.get('input[placeholder="/url/{{$variable}}"]').type('Example/');
        cy.wait(500);
        cy.get('button._addBtn_1lx3q_364').click();
        cy.wait(1000);
        cy.get('input[placeholder="key"]').type('Key');
        cy.get('input[placeholder="value"]').type('Value');
        cy.get('.react-tabs__tab-list').contains('Group by').click();
        cy.get('button.MuiButton-containedPrimary').click();
        
    }
    
    
    
    
    
    }
    export default new Add_1();