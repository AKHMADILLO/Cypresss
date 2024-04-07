import 'cypress-file-upload';

class Menu{
    Login(){
        cy.visit("https://react.admin.salomtv.udevs.io/login")
       
        cy.contains('button', 'Войти').click();
        try {
            cy.get('input[placeholder="Введите логин"]').type('superadmin-prod');
            cy.get('input[placeholder="Введите пароль"]').type('superadminpass');
          } catch (error) {
           
            cy.log("Login or password is incorrect ", error);
          }
          
          try {
            cy.contains('button', 'Войти').should('exist').click();
          } catch (error) {
            
            cy.log("Button not Clickable", error);

          }
        cy.get('[aria-label="Каталог"]').click();
        cy.get('button.MuiButton-containedPrimary').contains('Добавить фильм').click();
        cy.get(':nth-child(1) > .component > .Gallery > .add-block').click();
        cy.fixture('Screenshot 2024-04-02 100724.png').then((fileContent) => {
            cy.get('input[type="file"]').attachFile({
              fileContent: fileContent.toString(),
              fileName: 'Screenshot 2024-04-02 100724.png',
              mimeType: 'image/png'
            });
          });
        cy.wait(6000)  
        cy.get(':nth-child(2) > .component > .Gallery > .add-block').click(); 
        cy.fixture('Screenshot 2024-04-02 100724.png').then((fileContent) => {
            cy.get('input[type="file"]').attachFile({
              fileContent: fileContent.toString(),
              fileName: 'Screenshot 2024-04-02 100724.png',
              mimeType: 'image/png'
            });
          });  
        cy.wait(8000) 
        cy.get('.add-block').click();
        cy.fixture('Screenshot 2024-04-02 100724.png').then((fileContent) => {
            cy.get('input[type="file"]').attachFile({
              fileContent: fileContent.toString(),
              fileName: 'Screenshot 2024-04-02 100724.png',
              mimeType: 'image/png'
            });
          });  
          cy.get('input[name="title"]').type("example");
          cy.wait(5000);
          cy.get('input[name="slug"]').type("navoiy");
          cy.wait(7000);
          cy.get('input[name="release_year"]').type(2024); 
          cy.wait(7000);
          cy.get(':nth-child(3) > .component > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click();
          cy.contains('Salom TV').click();
          //cy.get('button.MuiButton-containedPrimary').contains('Сохранить').click();
          cy.contains('Мультимедиа').click();
          cy.get(':nth-child(1) > :nth-child(2) > .main_wrp > .uploder_wrp > input').click();

         // Read the binary content of the video file
        cy.readFile('cypress/fixtures/WIN_20231203_15_56_14_Pro.mp4', 'binary').then((fileContent) => {
         // Attach the video file to the file input field
        cy.get('input[type="file"]').attachFile({
        fileContent: fileContent,
        fileName: 'WIN_20231203_15_56_14_Pro.mp4',
        mimeType: 'video/mp4'
    });
    cy.get('button.MuiButton-containedPrimary').contains('Сохранить').click();
    cy.wait(1000)
  });
  
    cy.get(':nth-child(1) > :nth-child(4) > div > .MuiButtonBase-root').click();
    cy.get('[data-testid="EditIcon"]').click();
    cy.get('input[name="title"]').clear().type("example111");
          cy.wait(5000);
          cy.get('input[name="slug"]').clear().type("samarqand");
          cy.wait(7000);
          cy.get('input[name="release_year"]').clear().type(2025); 
          cy.wait(7000);
          cy.contains("O'zbekcha").click();
          cy.get('input[name="title"]').clear().type("O'zbekcha"); 
          cy.wait(5000);
          cy.get('input[name="slug"]').clear().type("andijon");
          cy.wait(7000);
          cy.get('input[name="release_year"]').clear().type(2023); 
          cy.wait(7000);
          cy.contains("English").click();
          cy.get('input[name="title"]').clear().type("English"); 
          cy.wait(5000);
          cy.get('input[name="slug"]').clear().type("navoiy");
          cy.wait(7000);
          cy.get('input[name="release_year"]').clear().type(2020); 
        
          cy.wait(7000);
          cy.get('button.MuiButton-containedPrimary').contains('Сохранить').click();
          cy.contains("O'zbekcha").click();
          cy.wait(7000);
          cy.contains("English").click();
          cy.wait(7000);
          cy.contains("Русский").click();
          
          cy.wait(3000);
          cy.get('[data-testid="ArrowBackIcon"]').click();
          cy.get(':nth-child(1) > :nth-child(4) > div > .MuiButtonBase-root').click();
          cy.get('[data-testid="DeleteIcon"]').click();
    }
}
export default new Menu();