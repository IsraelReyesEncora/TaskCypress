class ProductPage{

    getBackToProductsButton(){
        return cy.get('[data-test=back-to-products]')
    }
    getProductName(){
        return cy.get('.inventory_details_name')
    }
    getPrice(){
        return cy.get('.inventory_details_price')
    }
    getDescription(){
        return cy.get('.inventory_details_desc')
    }
    getAddToCartButton(){
        return cy.get('.btn.btn_primary.btn_small.btn_inventory')
    }
    getRemoveButton(){
        return cy.get('.cart_button')
    }
}
export default new ProductPage