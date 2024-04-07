import Login from './Authorization';
import GoTo_Menu from './GoTo_Menu';
import Add_Folder from './Add_Folder';

describe('Should create web-page folder', () => {
    it('should create web_page_folder',() => {
      
      Login.EnterLogin()
      Login.Enter_Password()
      Login.Click_Enter()
      Login.Set_Environment()
      Login.Set_Client_Type()
      Login.Submit()
      cy.wait(3000)
      GoTo_Menu.GoTo_menu()
      Add_Folder.Add_Folder();
    })
})