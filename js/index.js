let pass = prompt('Password');

if (pass == 'love16') {
    alert('Добро пожаловать!')
    document.location.href = 'pass.html';
} else {
    alert('Неверный пароль');
    document.location.reload()
}
