import { useState } from 'react'
import './App.css'
import Pizza from './component/Pizza'

function App() {
  const [mostrarPedido, setMostrarPedido] = useState(true)

  const handleCancel = () => {
    console.log('El pedido fue cancelado');
    setMostrarPedido(false)
  }

  return (
    <>
      <h1>tp32</h1>
      {mostrarPedido && <Pizza onCancel={handleCancel} />}
    </>
  )
}

export default App