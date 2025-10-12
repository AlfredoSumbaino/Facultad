import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  const [language, setLanguage] = useState(languages.spanish);

  const handleChangeLA = (idiomaID) => {
      //TIP: Función que cambia un idioma por otro (al pulsar el botón)
    const nuevoIdioma = Object.values(languages).find(
        (lang) => lang.id === idiomaID
      );

      if (nuevoIdioma) {
        console.log(nuevoIdioma);
        console.log("cambio");
        setLanguage(nuevoIdioma);
      }
  }
  console.log(language);

  return (
    <div className="App">
      <LanguageContext.Provider
        value={{ language, handleChangeLA }}
      >
        <>{/*  CONSEJO: Añada el proveedor LanguageContext */}
          <Navbar />
          <Body />
        </>
      </LanguageContext.Provider>
    </div>
  )
}

export default App