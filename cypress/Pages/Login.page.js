//Random email
let endings = ["gmail.com"],
    symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";
function rand(min, max) {
    return (min + Math.random() * (max - min + 1)) | 0
};
function getRandomStr(len) {
    let ret = ""
    for (let i = 0; i < len; i++)
        console.log(ret += symbols[rand(0, symbols.length - 1)]);
    return ret;
};
function getEmail() {
    let a = getRandomStr(rand(3, 5)),
        b = getRandomStr(rand(3, 5));
    return a + "_" + b + "." + a + "@" + endings[rand(0, endings.length - 1)];
};
//random password
function gen_password(len){
    if(len > 10) len = 10;
    len = len * (-1);
    return Math.random().toString(36).slice(len);
  };
class LoginPage {
    //Get elements:
    logEmailField() {
        return cy.get('form[aria-label="loginForm"] > div > div >label input[name="email"]');
    }
    logPasswordField() {
        return cy.get('form[aria-label="loginForm"] > div > div >label input[name="password"]');
    }
    remembBtn() {
        return cy.get('[class="svg-inline--fa fa-square fa-w-14 "]');
    }
    logSubmitBtn() {
        return cy.get('form[aria-label="loginForm"] [type="submit"][role="button"]');
    }
    loginRes() {
        return cy.get('[class="Message__MessageCopy-sc-1lbs5ge-2 ilxvtf"]')
    }
    loginEmptyRes() {
        return cy.get('[class="TextField__ErrorMessage-wqPfx fjBYhj"]')
    }
    //Methods:
    logEmailInput() {
        this.logEmailField().type(getEmail());
    }
    logPasswordInput() {
        this.logPasswordField().type(gen_password());
    }
    remembBtnClick() {
        this.remembBtn().click();
    }
    logSubmitBtnClick() {
        this.logSubmitBtn().click();
    }
    loginResCheck() {
        this.loginRes().should('have.text', 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.')
    }
    loginEmptyResCheck() {
        this.loginEmptyRes().should('be.visible').and('have.text', 'Required')
    }
    logSubmitBtnClickSecondTime() {
        this.logSubmitBtn().click();
    }
}
export default LoginPage;