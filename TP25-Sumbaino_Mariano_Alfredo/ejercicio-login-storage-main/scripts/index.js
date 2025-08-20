// Esta es la base de datos de nuestros usuarios
let status_window = document.getElementById("status-container");
let loading_message = document.getElementById("loader");
let error_message = document.getElementById("error-container");

let email = document.getElementById('email-input');
let password = document.getElementById('password-input');

let Logeado = document.getElementById("sesion_iniciada");
var menu_iniciosesion = document.querySelector('main');

var button = document.getElementById('login-btn');
var button_logout = document.getElementById('logout-btn');
let username = document.getElementById("usuario_name");

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
//////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
  cargarUsuario();
});

function cargarUsuario() {
  const usuario = baseDeDatos.usuarios.find(
    (user) => user.id === parseInt(localStorage.getItem('usuario'))
  );
  if (usuario) {
    status_window.classList.add('hidden');
    loading_message.classList.add('hidden');
    Logeado.classList.remove('hidden');
    menu_iniciosesion.classList.add('hidden');
    username.textContent = "Bienvenido, " + usuario.name;
  } else error_message.classList.remove('hidden');
}

button_logout.addEventListener('click', function() {
  cerrarSesion();
});

function cerrarSesion() {
  localStorage.removeItem('usuario');
  Logeado.classList.add('hidden');
  menu_iniciosesion.classList.toggle('hidden');
  restart();
}

//////////////////////////////////////////////////////////////////////
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
    email.value = '';
    password.value = '';
    username.textContent = '';
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
  localStorage.setItem('usuario', usuario.id);
  username.textContent = "Bienvenido, " + usuario.name;  
  return true;
}

//////////////////////////////////////////////////////////////////////



// ACTIVIDAD

// Paso a paso:

// 1) Al momento de que la persona inicia sesión, si las validaciones que ya tenemos implementadas
// han sido exitosas, deberemos almacenar la información del usuario en el LocalStorage.

// 2) Al mensaje de bienvenida que ya teníamos implementado, deberemos agregarle el nombre de la
// persona y un botón de "Cerrar Sesión".

// 3) Una vez iniciada la sesión, la misma se deberá mantener en ese estado para el caso de que la persona
// recargue la página. Para ello, deberás validar si existe información del usuario al momento en
// que se produce la carga de la página, y en base a dicha condción decidir que elementos mostrar.

// 3) Para el caso de que la persona haga click en el botón "Cerrar Sesión", se deberá eliminar
// la información del usuario, mostrar un mensaje indicando que se ha cerrado la sesión, y recargar
// la página para mostrar nuevamente el formulario de login.

/* 
TIPS:
  - Para lograr los objetivos de este ejercicio, deberás valerte de algunos eventos y métodos que vimos en
    las clases anteriores. Te invitamos a que revises los recursos en caso de que tengas dudas, ya que allí
    encontrarás todas las respuestas que necesitas para completar la actividad.

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - Al momento de guardar información del usuario en el navegador, recuerda que debemos almacenar solo la 
    información necesaria, y EN NINGUN CASO DEBEMOS GUARDAR LA CONTRASEÑA. Por ello, deberás seleccionar y
    separar la información que tienes que almacenar, a partir del objeto que contiene la información del 
    usuario.

   ¡Manos a la obra!
 */
