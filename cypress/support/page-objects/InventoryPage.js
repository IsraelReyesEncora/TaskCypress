class InventoryPage {
    getTitle(){
        return cy.get('.title')
    }
    getSortSelect(){
        return cy.get('[data-test=product_sort_container]')
    }
    getItemNames(){
        return cy.get(' .inventory_item_name')
    }
    getItemPrices(){
        return cy.get('.inventory_item_price')
    }
    getItemAddToCartButtons(){
        return cy.get('.btn.btn_primary.btn_small.btn_inventory')
    }
    getItemDescriptions(){
        return cy.get('.inventory_item_desc')
    }
}
export default new InventoryPage