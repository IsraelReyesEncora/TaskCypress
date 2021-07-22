class CartPage{
    getTitle(){
        return cy.get('.title')
    }
    getProductNames(){
        return cy.get('.inventory_item_name')
    }
    getCheckoutButton(){
        return cy.get('[data-test=checkout]')
    }
    getContinueShoppingButton(){
        return cy.get('[data-test=continue-shopping]')
    }
}
export default new CartPage