import React, { useContext } from 'react'
import "../App.css"
import LanguageContext from '../context'

const Navbar = () => {
    /* TIP: Descomentar este bloque de código, cuando "App.jsx" tiene un proveedor*/
    const {language, handleChangeLA } = useContext(LanguageContext)
    const {text} = language;
    console.log("nav:", language)
    return (
        <div className="navbar">
            {/* CONSEJO: Deje esta información dinámica, utilice los valores capturados a través del contexto (véase 'texto', en la línea 8). */}
            <p>{text.home}</p>
            <p>{text.current}: {language.id}</p>
            <select value={language.id} onChange={(e) => handleChangeLA(e.target.value)}>
                <option value="ES">Español</option>
                <option value="EN">English</option>
                <option value="PT">Portugues</option>
            </select>            
        </div>
    )
}

export default Navbar