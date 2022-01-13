let pass = prompt('Введите пароль');

if (pass == 'ps1ps3ps2ps4ps5') {
    alert('Добро пожаловать')
    document.location.href = 'pass.html';
} else {
    alert('Неверный пароль!');
    document.location.reload()
}
