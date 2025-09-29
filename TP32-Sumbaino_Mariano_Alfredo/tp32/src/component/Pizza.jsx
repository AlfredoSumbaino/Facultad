import { useState, useEffect } from 'react'

function Pizza({ onCancel }) {
  const [pedido, setPedido] = useState(null)
  const [cargando, setCargando] = useState(false)
  const [cancelado, setCancelado] = useState(false) 

  useEffect(() => {
    if (cargando) {
      const timer = setTimeout(() => {
        setPedido(' Pedido de pizza cargado')
        setCargando(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [cargando])

  useEffect(() => {
    if (pedido !== null) {
      console.log('El componente Pizza fue actualizado')
    }
  }, [pedido])

  const handleCargarPedido = () => {
    setCancelado(false)
    setPedido(null)
    setCargando(true)
  }

  const handleCancelarPedido = () => {
    setCargando(false)  
    setCancelado(true)  
    setPedido('Pedido cancelado')  
    onCancel()  // Llamamos a la función onCancel pasada como prop
  }

  return (
    <div>
      <h2>Pantalla de Pedido de Pizza</h2>
      <p>
        {cancelado
          ? 'Pedido cancelado'  // Mostramos el mensaje de cancelado
          : pedido
          ? pedido
          : cargando
          ? 'Cargando pedido...'
          : 'Haz clic para cargar tu pedido'}
      </p>
      {!cargando && !pedido && !cancelado && (
        <button onClick={handleCargarPedido}>Cargar pedido</button>
      )}
      <button onClick={handleCancelarPedido}>Cancelar pedido</button>
    </div>
  )
}

export default Pizza
