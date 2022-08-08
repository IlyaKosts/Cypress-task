import Main from "../Pages/Main.page"
import SignUpPage from "../Pages/SignUp.page"
import SupportPage from "../Pages/Support.page"
import LoginPage from "../Pages/Login.page"
describe('Test suit for "telnyx.com"', () => {
    let main = new Main();
    let signUp = new SignUpPage();
    let support = new SupportPage();
    let logIn = new LoginPage();
    beforeEach(()=> {
        cy.visit('/');
        /*You can change the window settings, depends on your own monitor:*/
        //cy.viewport(1360, 800);
        //cy.viewport(1200, 710);
        //cy.viewport(1000, 660)
        //cy.viewport(800, 440)
        //cy.viewport(600, 360)
        //cy.viewport( , )
        /*
          IMPORTANT! Depending on the selected window settings, page elements can change
        their location and appearance. This may affect on the test execution.
        */
    })
    /* 
      It(case below) had to be done like this, because if instead of "it" you'll use "before"(which is more logical), then 
    other tests simply will not be executed as needed.
    */
    it('Click on accebt button(if exist)', () => {
        Cypress.on('fail', (error, runnable) => {
            if (!error.message.includes('Expected to find')) {
                throw error
            }
        });
        cy.get('[class="sc-5d3a275a-0 jdjrgE"] button', {timeout: 3000}).click();
    })
    it('TC#1: Sign up from main page (valid inputs)', ()=> {
        main.emailInput();
        signUp.nameInput();
        signUp.passwordInput();
        signUp.agreeWpBtnClick();
        signUp.submitBtnClick();
        signUp.positiveEmailResCheck();
        /* 
           The test may sometimes fail, due to the fact that a random email is used.
          In that case you need just to re run it.
        */
    })
    it('TC#2: Sign up from main page (invalid inputs(password))', ()=> {
        main.emailInput();
        signUp.nameInput();
        signUp.invPasswordInput();
        signUp.agreeWpBtnClick();
        signUp.submitBtnClick();
        signUp.invPasswordInputCheck();
    })
    it('TC#3: Sign up from Sign Up page (invalid inputs(email))', ()=> {
        main.tryBtnClick();
        signUp.invEmailInput();
        signUp.nameInput();
        signUp.passwordInput();
        signUp.agreeWpBtnClick();
        signUp.submitBtnClick();
        signUp.invEmailInputCheck();
    })
    it('TC#4: Sign up from Sign Up page (empty inputs)', ()=> {
        main.tryBtnClick();
        signUp.submitBtnClick();
        signUp.emptyEmailInputCheck();
        signUp.emptyNameInputCheck();
    })
    it('TC#5: Support page, search function', ()=> {
        main.supportBtnClick();
        support.shearchInput();
        support.shearchResultACheck();
    })
    it('TC#6: Support page, collections("Getting started")', () => {
        main.supportBtnClick();
        support.getStartedBtnClick();
        support.howToSuBtnClick();
        support.howToSuResCheck();
    })
    it('TC#7: Log in with invalid inputs', () => {
        main.logInBntClick();
        logIn.logEmailInput();
        logIn.logPasswordInput();
        logIn.remembBtnClick();
        logIn.logSubmitBtnClick();
        logIn.loginResCheck();
    })
    it('TC#8: Log in with empty inputs', () => {
        main.logInBntClick();
        logIn.remembBtnClick();
        logIn.logSubmitBtnClick();
        logIn.logSubmitBtnClickSecondTime();
        logIn.loginEmptyResCheck();
    })
    it('TC#9: Check presence of bottom elements (clickable) on the main page', () => {
        main.bottomElemScroll();
        main.bottomElemCheck();
    })
    it('TC#10: Check dropdown elements (Products, Solutions, Resources, Company, Pricing)', () => {
        main.listOfDropElemHover();
        main.prodDropElemHover();
        main.prodListElemCheck();
        main.soluDropElemHover();
        main.soluListElemCheck();
        main.resourDropElemHover();
        main.resourListElemCheck();
        main.compDropElemHover();
        main.compListElemCheck();
        main.pricingDropElemHover();
        main.pricingListElemCheck();
    })
})