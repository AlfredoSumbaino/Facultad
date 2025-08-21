var profile_img = document.getElementById("api_image");
var profile_name = document.getElementById("api_nombre");
var profile_email = document.getElementById("api_email");

let button_fetch = document.getElementById("brnrandom");


document.addEventListener("DOMContentLoaded",function(){
    renderizarDatosUsuario();
});
function renderizarDatosUsuario() {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos la respuesta
            profile_data=data;
            profile_email.textContent = data.results[0].email;
            profile_name.textContent = data.results[0].name.title + ". " + data.results[0].name.last + " " + data.results[0].name.first;
        //data.results[0].name.title
            //data.results[0].name.last
            //data.results[0].name.first
            
            profile_img.setAttribute("src",data.results[0].picture.large);
        });
}
button_fetch.addEventListener('click', function(){
    renderizarDatosUsuario();
});


/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.