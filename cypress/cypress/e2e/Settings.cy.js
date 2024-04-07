import Login from './Authorization';
import GoTo_Menu from './GoTo_Menu';
import Settings from './Settings';
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
      Settings.add();
      cy.wait(1000);
    })
})