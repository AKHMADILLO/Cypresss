import 'cypress-file-upload';

class Menu{
        GoTo_menu(){
        cy.get('.UserAvatar').click();
        cy.wait(2000)
        cy.get(':nth-child(3) > ._itemText_1g7og_40').click();
    
        
        cy.wait(2000)
        

    

        
        cy.get('input[name="name"]').click().type("Name");
        cy.get('input[aria-invalid="false"][name="email"][placeholder="Enter email"][type="text"]').click().type("email@gmail.com");
        cy.get('input[aria-invalid="false"][name="phone"][placeholder="Enter phone"][type="text"]').click().type("+998999994433")
        cy.get('input[aria-invalid="false"][name="login"][placeholder="Enter login"][type="text"]').click().type("Login_example123")
        cy.get('.MuiButton-containedPrimary').scrollIntoView().click();
        cy.wait(1000)


    }
}
export default new Menu();