describe('Main page', function() {
    it('test images', function() {
      cy.visit('localhost:5500');
      cy.contains('Create 1,000 rows').click()
      cy.contains('Update rows').click()
      cy.contains('Swap rows').click()
      cy.contains('Clear').click()
    })
});