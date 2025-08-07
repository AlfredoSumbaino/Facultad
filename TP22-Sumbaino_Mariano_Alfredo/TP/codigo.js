//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
let tarjeta = document.getElementById("tarjeta");
tarjeta.setAttribute("class", "card");

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
let imagen = document.getElementById("logo");
imagen.setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png");

//3- Quitarle al titulo la clase que le está dando un formato feo
let titulo = document.querySelector("h1");
titulo.removeAttribute("class");
//titulo.classList.remove("titulo-feo");
//4- Chequear si el link a youtube posee o no el atributo href
let linkYoutube = document.getElementById("link_youtube"); 
linkYoutube.hasAttribute("href") ? console.log("El link a YouTube tiene el atributo href.") : console.log("El link a YouTube no tiene el atributo href.");
//5- Obtener el href del link a wikipedia y mostrarlo por consola
let linkWikipedia = document.getElementById("link_wikipedia");
linkWikipedia.hasAttribute("href") ? console.log("El link de Wikipedia tiene el atributo href") : console.log("El link a Wikipedia no tiene el atributo href.");
