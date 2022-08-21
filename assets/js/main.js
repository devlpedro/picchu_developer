let password = document.getElementById('password');
let icon = document.querySelector('#eyes');

icon.addEventListener('click', eyeClick);

function eyeClick() {
    let inputTypePassword = password.type === 'password';

    if(inputTypePassword) {
        showPassword()
    } else {
        hidePassword()
    }
}

function showPassword() {
    password.setAttribute('type', 'text');
    icon.setAttribute('src', 'assets/image/eye-off.svg');
}

function hidePassword() {
    password.setAttribute('type', 'password');
    icon.setAttribute('src', 'assets/image/eye.svg');
}