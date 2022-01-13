let pass = prompt('Password');

if (pass == 'love16') {
    alert('Я тебя люблю!')
    document.location.href = 'pass.html';
} else {
    alert('Подумай родная!');
    document.location.reload()
}
