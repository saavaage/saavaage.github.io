/**
 * Created by boss on 22 июля.
 */
var loginUserBlock = document.querySelector('.login');
var loginWindow = document.querySelector('.login-window');
var close = document.querySelector('.login-window-close');

var loginForm = loginWindow.querySelector('.login-form');
var userField = loginWindow.querySelector('.user');
var passField = loginWindow.querySelector('.password');

var storage = localStorage.getItem('login');

// открытие (+ фокус на поле) окна по клику на user-block
loginUserBlock.addEventListener('click', function (event) {
    event.preventDefault();
    loginWindow.classList.add('login-window-show');

    if (storage) {
        userField.value = storage;
        passField.focus();
    } else {
        userField.focus();
    }
});

// закрытие окна по клику на крестике
close.addEventListener('click', function (event) {
    event.preventDefault();
    loginWindow.classList.remove('login-window-show');
});
// закрытие окна по клику на Esc
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 27) {
        if (loginWindow.classList.contains('login-window-show')) {
            loginWindow.classList.remove('login-window-show');
        }
    }
})

// сохранение в localStorage логина при отправке данных на сервер
loginForm.addEventListener('submit', function() {
    if ((userField.value && passField.value)) {
        localStorage.setItem('login', userField.value);
        // document.querySelector('.login-text').innerHTML = localStorage.getItem('login');
    }
});