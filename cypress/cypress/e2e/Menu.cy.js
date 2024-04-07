import Login from './Authorization';
import GoTo_Menu from './GoTo_Menu';
import Create_button from './Create_Table';
import Add_button_Table from './Add_button_Table';
import Add_Button_CALENDAR from './Add_Button_CALENDAR';
import Add_button_CALENDAR_HOUR from './Add_button_CALENDAR_HOUR';
import gantt from './gantt';
import Add_TREE from './Add_TREE';
import Add_BOARD from './Add_BOARD';
import Add_FINANCE_CALENDAR from './Add_FINANCE_CALENDAR';
import Add_Microfrontend from './Add_Microfrontend';
import Add_Folder from './Add_Folder';
import Folder_use from './Folder_use';
import Folder_Add_table from './Folder_Add_table';
import Pin_delete_Folder from './Pin_delete_Folder';
import Folder_Add_Folder from './Folder_Add_Folder';
import Folder_Add_Microfrontend from './Folder_Add_Microfrontend';
import Folder_Add_Webpage from './Folder_Add_Webpage';
import Add_web_page from './Add_web_page';
import Menu_Button_Profile from './Menu_Button_Profile';
import Add_Api_keys from './Add_Api_keys';
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
      Create_button.Add_Table();
      cy.wait(2000)
      Add_button_Table.add();
      cy.wait(2000)
      Add_Button_CALENDAR.add();
      cy.wait(2000)
      Add_button_CALENDAR_HOUR.add();
      cy.wait(2000)
      gantt.add();
      cy.wait(2000)
      Add_TREE.add();
      cy.wait(2000)
      Add_BOARD.add();
      cy.wait(2000)
      Add_FINANCE_CALENDAR.add();
      cy.wait(2000);
      
      cy.wait(1000);
      Add_Folder.Add_Folder();

      cy.wait(1000)
      Folder_use.Use();
      cy.wait(1000)
      Folder_Add_table.Use();
      cy.wait(1000)
      Folder_Add_Folder.Use()
      cy.wait(1000)
      Folder_Add_Microfrontend.Use();
      cy.wait(1000)
      Folder_Add_Webpage.Use();
      cy.wait(2000)
      Pin_delete_Folder.Use()
      cy.wait(1000)
      Add_Microfrontend.Add_Microfrontend();
      cy.wait(1000)
      Add_web_page.Add_Web_page();
      cy.wait(5000)
      Menu_Button_Profile.GoTo_menu();
      cy.wait(5000)
      Add_Api_keys.GoTo_menu();
    })
})