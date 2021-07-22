class LoginPage {
    getLoginHeaderLogo(){
        return cy.get('.login_logo')
    }
    getUserNameField(){
        return cy.get('[data-test=username]')
    }
    getPasswordField(){
        return cy.get('[data-test=password]')
    }
    getLoginButton(){
        return cy.get('[data-test=login-button]')
    }

}
export default new LoginPage