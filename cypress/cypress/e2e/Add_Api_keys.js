class Menu{
    GoTo_menu(){
    cy.get('.UserAvatar').click();
    cy.wait(2000)
    //cy.get(':nth-child(2) > ._itemText_1g7og_40').click();
    // cy.contains('div._menuItem_1g7og_14', 'Api Keys').click();

    // cy.wait(2000);
    // cy.contains('div._menuItem_1g7og_14', 'Api Keys').click();
    // cy.wait(2000);
    // cy.get('p').contains( 'Добавить').click({force:true});
    
    // //cy.get('input[name="name"]').type('Your text goes here');

    
    // cy.get('button[name="save"]').click();
    cy.get(':nth-child(5) > ._itemText_1g7og_40').click();
    cy.get('._createButton_1h2qa_1').click({multiple:true})
    cy.wait(5000);
    cy.get('input[name="name"]').type("Settings")
    cy.wait(3000)
    cy.get('._iconWrapper_10yc5_1').click();
    cy.get('._iconsBlock_10yc5_28 > :nth-child(23)').click();
    cy.get(':nth-child(2) > .component > .MuiFormControl-root > .MuiInputBase-root').click().type("This is description");
    cy.get('._primary_19zv0_20').click();
    
    cy.wait(2000)
    cy.get(':nth-child(2) > div > .UserAvatar').click()
    cy.wait(2000)

    cy.get(':nth-child(5) > ._itemText_1g7og_40').click();
    cy.wait(1000)
    cy.get('.RectangleIconButton').click();
    cy.get('.MuiList-root > :nth-child(2)').click();
}
}
export default new Menu();