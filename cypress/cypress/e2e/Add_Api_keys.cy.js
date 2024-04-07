import Login from './Authorization';
import GoTo_Menu from './GoTo_Menu';
import Add_Api_keys from './Add_Api_keys';
describe('Go to menu', () => {
    it('should go to "Menu" button',() => {
      
      Login.EnterLogin()
      Login.Enter_Password()
      Login.Click_Enter()
      Login.Set_Environment()
      Login.Set_Client_Type()
      Login.Submit()
      cy.wait(3000)
      GoTo_Menu.GoTo_menu()
      Add_Api_keys.GoTo_menu();
    })
})
