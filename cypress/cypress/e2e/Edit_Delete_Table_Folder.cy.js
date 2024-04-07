import Login from './Authorization';
import GoTo_Menu from './GoTo_Menu';
import Create_button from './Create_Table';
import Edit_Delete_Table_Folder from './Edit_Delete_Table_Folder';

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
      //Create_button.Add_Table();
      Edit_Delete_Table_Folder.edit_Table();
      cy.wait(1000)
    })
})