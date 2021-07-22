/// <reference types="cypress" />

import loginPage from '../support/page-objects/LoginPage'
import inventoryPage from '../support/page-objects/InventoryPage'
import productPage from '../support/page-objects/ProductPage'
import commonPageElements from '../support/page-objects/CommonPageElements'
import cartPage from '../support/page-objects/CartPage'
describe('E2E flow', () => {

    beforeEach(() => {
        window.sessionStorage.clear()
        cy.visit(`${Cypress.env('baseUrl')}`)
    })
    it('Test the flow of adding an element to the cart', () => {
        cy.url().should('contain', Cypress.env('baseUrl'))
        loginPage.getLoginHeaderLogo().should('be.visible')
        cy.fixture('validLoginCredentials').then((data)=>{
            loginPage.getUserNameField().type(data.userName)
            loginPage.getPasswordField().type(data.password)
        })
        loginPage.getLoginButton().click()
        cy.url().should('contain', '/inventory')
        inventoryPage.getTitle().should('have.text', 'Products')
        commonPageElements.getShoppingCartCurrentElements().should('not.exist')
        cy.fixture('products').then((data)=>{
            cy.contains(data.boltTShirt).click()
            productPage.getProductName().should('have.text', data.boltTShirt)
            productPage.getAddToCartButton().click()
            commonPageElements.getShoppingCartCurrentElements().should('exist')
            commonPageElements.getShoppingCartButton().click()
            cartPage.getTitle().should('have.text', 'Your Cart')
            cartPage.getProductNames().contains(data.boltTShirt).should('exist')
        })
    })

})