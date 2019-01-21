describe('Main page', function() {
    it('test images', function() {
      cy.visit('localhost:8080/#/about');
  
      for (let index = 0; index < 100; index++) {
        cy.contains('Add photo').click()
      }
      for (let index = 0; index < 100; index++) {
        cy.contains('Remove photo').click()
      }
    })
});