Feature('login');

Scenario('Зарегистрированный пользователь может авторизоваться по email', ({ I, mainPublicPage }) => {
    I.amOnPage('https://www.pobeda.aero/en');
    mainPublicPage.login('chonkainna@mail.ru', 'inna1234');
    I.see('Welcome to your personal cabinet!');
});

Scenario('Авторизованный пользователь может разлогиниться', ({ I, mainAuthorizedPage, mainPublicPage }) => {
    I.amOnPage('https://www.pobeda.aero/en');
    mainPublicPage.login('chonkainna@mail.ru', 'inna1234');
    mainAuthorizedPage.logout();
    mainPublicPage.openAuthPopup();
    I.see('Login to your account');
});

Scenario('Анонимный пользователь может восстановить пароль', ({ I, mainPublicPage }) => {
    I.amOnPage('https://www.pobeda.aero/en');
    mainPublicPage.resetPassword('chonkainna@mail.ru');
    I.see('We have sent you a verification code to your email');
});

Scenario('Анонимный пользователь может зарегистрироваться', ({ I, mainPublicPage}) => {
    I.amOnPage('https://www.pobeda.aero/en');
    mainPublicPage.register('test@test.ru');
    I.see('You should have received an email in your inbox with a security code to complete your registration');
});

Scenario('Авторизованный пользователь может сменить пароль', ({ I, mainAuthorizedPage, mainPublicPage }) => {
    I.amOnPage('https://www.pobeda.aero/en');
    mainPublicPage.login('chonkainna@mail.ru', 'inna1234');
    mainAuthorizedPage.changePassword('inna1234', '1234inna');
    I.see('The password has been changed successfully');
    mainAuthorizedPage.closePopup();
    //меняем пароль для этого пользователя на первоначальный, чтобы сохранить независимость тестов
    mainAuthorizedPage.changePassword('1234inna', 'inna1234');
});


