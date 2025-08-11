
var body = document.querySelector('body');
var button = document.querySelector('button');
//console.log(button);
//console.log(body);
button.addEventListener('click', function() {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        button.textContent = 'Desactivar modo oscuro';
    } else {
        button.textContent = 'Activar modo oscuro';
    }
});
