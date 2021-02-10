const { I } = inject();

module.exports = {

    buttons: {
        loginButton: {css: '.ui-form_button-action'},
        profileButton: {css: '#auth-component'},
    },

    fields: {
        email: '#email',
        password: '#password',
        username: '#username',
    },

    links: {
        registrationLink: {css: 'button.auth-form_getpass_link'},
        resetPasswordLink: {css: 'button.ui-form_forgot_password_link'},
    },

    login(username, password) {
        this.openAuthPopup();
        I.fillField(this.fields.username, username);
        I.fillField(this.fields.password, password);
        I.click(this.buttons.loginButton);
    },

    openAuthPopup(){
        I.click(this.buttons.profileButton);
    },

    register(username){
        this.openAuthPopup();
        I.click(this.links.registrationLink);
        I.fillField(this.fields.username, username);
        I.click(this.buttons.loginButton);
    },

    resetPassword(username){
        this.openAuthPopup();
        I.click(this.links.resetPasswordLink);
        I.fillField(this.fields.email, username);
        I.click(this.buttons.loginButton);
    },
}
