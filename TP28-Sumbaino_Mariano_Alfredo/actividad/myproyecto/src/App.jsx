
import './App.css'
import reeveImage from '/img/reeveimage.jpg';

const persona = {
  nombre: "Keanu Charles",
  apellido: "Reeves",
  imagen: reeveImage,
  edad: 61,
  nacionalidad: "Canadiense",
  peliculas: [
    "The Matrix (1999) y sus secuelas: The Matrix Reloaded, The Matrix Revolutions, The Matrix Resurrections",
    "John Wick (2014) y sus secuelas",
    "Speed (1994)",
    "Point Break (1991)",
    "Constantine (2005)",
    "The Devil's Advocate (1997)",
    "A Walk in the Clouds (1995)",
    "Bram Stoker’s Dracula (1992)",
    "Bill & Ted’s Excellent Adventure (1989) y sus secuelas"
  ],
  educacion: ["Escuela secundaria: Sir Winston Churchill Secondary School, Vancouver, Canadá", 
    "Educación adicional: Asistió a clases de teatro en el Teatro de la Juventud de Vancouver"],
  biografia: `Keanu Reeves es un actor, productor, músico y ocasional
  director canadiense, conocido por su estilo reservado, 
  su humildad y su versatilidad en la actuación.
  A pesar de su fama, es conocido por llevar una vida
  sencilla y por sus actos de generosidad, como donar
  parte de su salario a equipos técnicos de las películas
  o ayudar a fans y extraños.`
}

function App() {

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Education</a></li>
          </ul>
        </nav>
      </header>
      <div>
        <section className="split-section">
          <div className="image-side">
            <img src={persona.imagen} alt={`Foto de ${persona.nombre} ${persona.apellido}`} />
          </div>
          <div className="info-side">
            <h2>Información de la persona</h2>
            <ul>
              <li><strong>Nombre:</strong> {persona.nombre}</li>
              <li><strong>Apellido:</strong> {persona.apellido}</li>
              <li><strong>Edad:</strong> {persona.edad} años</li>
              <li><strong>Nacionalidad:</strong> {persona.nacionalidad}</li>
              <li><strong>Peliculas:</strong> 
                <ul>
                  {persona.peliculas.map((peli, idx) => (
                    <li key={idx}>{peli}</li>
                  ))}
                </ul>
              </li>
              <li><strong>Educacion:</strong> 
                  <ul>
                    {persona.educacion.map((peli, idx) => (
                    <li key={idx}>{peli}</li>
                  ))}
                  </ul>
              </li>
            </ul>
            <h2>Biografia</h2>
            <p>{persona.biografia}</p>
          </div>
        </section>            
      </div>
      
      
    </>
  )
}

export default App
