import Login from './Authorization';
import GoTo_Menu from './GoTo_Menu';
import gantt from './gantt';
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
      gantt.add();
      cy.wait(2000)
      
    })
})