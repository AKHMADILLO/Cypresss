import Login from './Authorization';
describe('Login to the https://app.u-code.io/login', () => {
    it('should login to the https://app.u-code.io/',() => {
      
      Login.EnterLogin()
      Login.Enter_Password()
      Login.Click_Enter()
     
    })
})