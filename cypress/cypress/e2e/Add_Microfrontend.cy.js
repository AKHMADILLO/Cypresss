import Login from './Authorization';
import GoTo_Menu from './GoTo_Menu';
import Add_Microfrontend from './Add_Microfrontend';

describe('Should create Table', () => {
    it('should create table',() => {
      
      Login.EnterLogin()
      Login.Enter_Password()
      Login.Click_Enter()
      Login.Set_Environment()
      Login.Set_Client_Type()
      Login.Submit()
      cy.wait(3000)
      GoTo_Menu.GoTo_menu()
      Add_Microfrontend.Add_Microfrontend();
    })
})