class Add_Calendar{
    add(){
        cy.get('span.MuiTypography-root.MuiTypography-body1.MuiListItemText-primary.css-qql987').click();
        cy.get(':nth-child(1) > .FiltersBlock > :nth-child(1) > ._selector_njkjb_1 > ._element_njkjb_5').click();
        cy.wait(1000);
        cy.get('._left_oha17_4 > :nth-child(2)').click();
        cy.get('._button_oha17_49 > .MuiButtonBase-root').click();
        cy.wait(2000)
        cy.get('input[name="name"]').type('CALENDAR');
        cy.get('input[name="default_limit"]').type('10');
        cy.wait(500);
        cy.get(':nth-child(3) > ._sectionBody_1lx3q_167 > :nth-child(2) > :nth-child(1) > .component > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click();
        cy.get('[data-value="15"]').click();
        cy.get(':nth-child(6) > :nth-child(1) > .component > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click()
        cy.get('li.MuiMenuItem-root[data-value="role"]').click();
        
        cy.get(':nth-child(6) > :nth-child(2) > .component > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click();
        cy.contains('li[role="option"][data-value="grant_access"]', 'Предоставление доступа').click();
        cy.get(':nth-child(7) > :nth-child(1) > .component > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click();
        cy.get('.MuiList-root > [tabindex="0"]').click();
        cy.get(':nth-child(7) > :nth-child(2) > .component > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click();
        cy.get('[data-value="name"]').click();
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
    export default new Add_Calendar();