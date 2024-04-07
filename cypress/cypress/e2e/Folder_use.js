class Use{
Use(){
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
    cy.get('svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-10dohqv[aria-hidden="true"][viewBox="0 0 24 24"][data-testid="AddIcon"][size="13"]').click();
    cy.wait(500)
    cy.get(':nth-child(1) > h3').click()
    cy.get('._iconWrapper_10yc5_1').click();
    cy.get('._iconsBlock_10yc5_28 > :nth-child(3)').click()
    cy.wait(1000)
    cy.get('input[placeholder="Название"]').click();
    cy.get('input[placeholder="Название"]').type("Test_new")
    cy.get(':nth-child(3) > .component > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.get(':nth-child(3) > .component > .MuiFormControl-root > .MuiInputBase-root').type(" description field")
    cy.get('input[placeholder="SLUG"]').click();
    cy.get('input[placeholder="SLUG"]').type("slug");
    //cy.get('.MuiSelect-select > span').click();
    //cy.get('input.PrivateSwitchBase-input.MuiSwitch-input.css-1m9pwf3#switch-:rp:').click();
    //cy.get('div[id="switch-:rp:"]').click();
    cy.get('._leftSide_acvvn_20').contains('Layouts').click();
    cy.wait(1000);
    cy.get('p').click()
    cy.wait(1000);
    cy.wait(1000);
    cy.get('p').click()
    cy.wait(1000);
    cy.get('p').click()
    cy.wait(2000);
    cy.get(':nth-child(2) > :nth-child(3) > .MuiBox-root > :nth-child(2) > .RectangleIconButton')
    cy.wait(1000);
    cy.get('._leftSide_acvvn_20').contains('Fields').click();
    cy.wait(1000);
    cy.get('p').click()
    cy.wait(1000);
    cy.get(':nth-child(1) > #panel1a-header > .MuiAccordionSummary-content > h2').click();
    cy.get('._iconWrapper_10yc5_1').click()
    cy.get('._iconsBlock_10yc5_28 > :nth-child(4)').click()
    cy.get('input[placeholder="Field Label"]').click();
    cy.get('input[placeholder="Field Label"]').type('Label');
    cy.get('input[placeholder="Field SLUG"]').click();
    cy.get('input[placeholder="Field SLUG"]').type('Field SLUG');
    
    cy.contains('div.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.css-l5y6o4', 'Type').click();
    cy.get('[data-value="SINGLE_LINE"] > .flex').click();
    cy.get(':nth-child(2) > #panel1a-header > .MuiAccordionSummary-content > h2').click();
    cy.get('input[name="attributes.defaultValue"]').scrollIntoView().click().type(' example');
    cy.get('svg[data-testid="FlashOnIcon"]').scrollIntoView().click();
    cy.get(':nth-child(1) > #panel1a-header > .MuiAccordionSummary-content').click();
    cy.get('input[name="attributes.validation"]').scrollIntoView().click();
    cy.get('input[name="attributes.validation"]').type('example Validation');
    cy.get('input[name="attributes.validation_message"]').scrollIntoView().click().type('validation message');
    cy.get(':nth-child(2) > #panel1a-header > .MuiAccordionSummary-content > h2').click()
    cy.get(':nth-child(2) > .component > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').scrollIntoView();
    cy.get('._settingsFooter_1ej1x_41 > ._button_19zv0_1').click();
    cy.wait(1000)
    cy.get('._leftSide_acvvn_20').contains('Custom errors').click();
    cy.get('._primary_19zv0_20').click({force: true});
    cy.get('.BackButton').click();

    //cy.get('._primary_19zv0_20').click;

}








}   
export default new Use