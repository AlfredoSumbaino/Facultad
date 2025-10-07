
// TODO: Importar BrowserRouter, Routes, Route, etc.
// TODO: Importar los componentes de pages/
import { Routes, Route, Outlet } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Receta from './pages/Receta';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="App">
      <h1>🍽️ Recetario Digital</h1>      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='receta/:id' element={<Receta />} />
        </Route>
      </Routes>

      {/* TODO: 
          1. Envolver con BrowserRouter
          2. Crear las rutas con Routes y Route
          3. Implementar rutas anidadas
          4. Agregar la Navbar como componente persistente
          5. Importar componentes desde pages/ (nueva estructura)
      */}
    </div>
  );
}
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
export default App;
