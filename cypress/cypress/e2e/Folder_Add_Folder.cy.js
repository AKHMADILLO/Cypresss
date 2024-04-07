import Login from './Authorization';
import GoTo_Menu from './GoTo_Menu';
import Folder_Add_Folder from './Folder_Add_Folder';
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
      
      cy.wait(2000)
      Folder_Add_Folder.Use();
    })
})