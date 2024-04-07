import Login from './Authorization';
import GoTo_Menu from './GoTo_Menu';
import Create_button from './Create_Table';

describe('Should create Table', () => {
    it('should create table',() => {
      
      Login.EnterLogin()
      Login.Enter_Password()
      Login.Click_Enter()
      Login.Set_Environment()
      
      cy.wait(3000)
      GoTo_Menu.GoTo_menu()
      Create_button.Add_Table();
    })
})