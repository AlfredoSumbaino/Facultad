import React, { useContext } from 'react'
import LanguageContext from '../context'

const Body = () => {
  const { language } = useContext(LanguageContext);
    
    /* CONSEJO: Utilice useContext() */
  const { text  } = language;
    
    return (
        <div>
            {/* CONSEJO: Utilice los valores capturados a través del contexto */}
            <h1>{text.title}</h1>
            <p>{text.description}</p>
        </div>
    )
}

export default Body