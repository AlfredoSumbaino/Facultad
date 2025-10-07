import { useState } from 'react';
import './App.css';
import { useFetch, statuses } from './Components/fetch/useFetch.jsx';

import {
  Titulo,
  ComentarioCard,
  Formulario
} from './styles/ComentarioStyles.js';

function App() {
  const URL_API = 'https://jsonplaceholder.typicode.com/comments';
  const { data, status } = useFetch(URL_API, {});
  console.log(data, status);

  // Estado formulario
  const [form, setForm] = useState({
    postId: '',
    name: '',
    email: '',
    body: ''
  });

  const [mensaje, setMensaje] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje(null);

    try {
      const res = await fetch(URL_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error('Error al enviar');

      const nuevoComentario = await res.json();
      console.log('Comentario enviado:', nuevoComentario);

      setMensaje('Comentario enviado con éxito');
      // Limpiar formulario
      setForm({
        postId: '',
        name: '',
        email: '',
        body: ''
      });
    } catch (error) {
      console.error(error);
      setMensaje('Error al enviar comentario');
    }
  };

  const Component =
    status !== statuses.ERROR ? (
      <>
        {status === statuses.LOADING && <p>Loading...</p>}
        {data && <Lista elementos={data.slice(0, 10)} />} {/* Mostrar solo 10 comentarios*/}
      </>
    ) : (
      <p>Network Error</p>
    );

  return (
    <>
      <Titulo>Comentarios</Titulo>

      <section>
        <h2>Agregar nuevo comentario</h2>
        <Formulario onSubmit={handleSubmit}>
          <input
            type="number"
            name="postId"
            placeholder="Post ID"
            value={form.postId}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="body"
            placeholder="Comentario"
            value={form.body}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar</button>
        </Formulario>
        {mensaje && <p>{mensaje}</p>}
      </section>

      <hr />

      <section>
        <h2>Comentarios obtenidos (GET)</h2>
        {Component}
      </section>
    </>
  );
}

function Lista({ elementos }) {
  return (
    <ul>
      {elementos.map((el) => (
        <ComentarioCard  key={el.id} >
          <h4>{el.name}</h4>
          <p><strong>Email:</strong> {el.email}</p>
          <p>{el.body}</p>
        </ComentarioCard >
      ))}
    </ul>
  );
}

export default App;