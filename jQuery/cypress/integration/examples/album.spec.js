describe('Main page', function() {
    it('test images', function() {
      cy.visit('localhost:5500/#/about');
      for (let index = 0; index < 100; index++) {
        cy.contains('Add photo').click()
      }
      for (let index = 0; index < 100; index++) {
        cy.contains('Delete photo').click()
      }
    })
});