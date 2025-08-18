// Esta es la base de datos de nuestros usuarios
let status_window = document.getElementById("status-container");
let loading_message = document.getElementById("loader");
let error_message = document.getElementById("error-container");

let email = document.getElementById('email-input');
let password = document.getElementById('password-input');

let Logeado = document.getElementById("sesion_iniciada");
var menu_iniciosesion = document.querySelector('main');

var button = document.querySelector('button');

const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

function tryEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

button.addEventListener('click', function() {
  restart();
  status_window.classList.toggle('hidden');


  if (validar(email.value, password.value)) {
    loading_message.classList.toggle('hidden');
    setTimeout(() => {
      Logeado.classList.remove('hidden');
      menu_iniciosesion.classList.add('hidden');
    }, 3000);
  } else {
    error_message.classList.remove('hidden');
  }
});

function tryEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function restart() {
  if (!status_window.classList.contains('hidden')) {
    status_window.classList.toggle('hidden');
  } 
  if (!loading_message.classList.contains('hidden')) {
    loading_message.classList.toggle('hidden');
  } 
  if (!error_message.classList.contains('hidden')) {
    error_message.classList.toggle('hidden');
  } 
}
function validar(email, password) {
  if (!tryEmail(email)) {
    return false;
  }
  if (password.length < 5) {
    error_message.classList.remove('hidden');
    return false;
  }
  const usuario = baseDeDatos.usuarios.find(
    (user) => user.email === email && user.password === password
  );
  if (!usuario) {
    error_message.classList.remove('hidden');
    return false;
  }
  return true;
}

// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.

// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.

// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."

// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */
