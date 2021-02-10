const { I } = inject();

module.exports = {

    fields: {
        confirmNewPassword: '#confirmNewPassword',
        currentPassword: '#currentPassword',
        newPassword: '#newPassword',
    },

    buttons: {
        changePasswordButton: {css: 'button.change-password_action-button'},
        logoutButton: {css: '.account-menu_options>div:last-child'},
        okButton: {css: '.modal_footer_button-action'},
        profileButton: {css: '#auth-component'},
    },

    links: {
        changePasswordLink: {css: '.account-menu_options>div:nth-child(6)'},
    },

    changePassword(oldPassword, newPassword){
        I.click(this.links.changePasswordLink);
        I.fillField(this.fields.currentPassword, oldPassword);
        I.fillField(this.fields.newPassword, newPassword);
        I.fillField(this.fields.confirmNewPassword, newPassword);
        I.click(this.buttons.changePasswordButton);
    },

    closePopup(){
        I.click(this.buttons.okButton);
    },

    logout() {
        I.click(this.buttons.logoutButton);
    },
}
