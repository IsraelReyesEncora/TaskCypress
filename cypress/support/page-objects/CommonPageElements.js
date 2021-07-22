class CommonPageElements{
    getBurgerMenuButton(){
        return cy.get('#react-burger-menu-btn')
    }
    getLogo(){
        return cy.get('.app_logo')
    }
    getShoppingCartButton(){
        return cy.get('.shopping_cart_link')
    }
    getShoppingCartCurrentElements(){
        return cy.get('#shopping_cart_container > a > span')
    }
}
export default new CommonPageElements