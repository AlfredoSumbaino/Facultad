import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
// TODO: Opcionalmente pueden usar el servicio (avanzado)
import { getRecetasPorCategoria } from '../services/recetasAPI';

const Home = () => {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRecetas = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
      const data = await res.json();
      setRecetas(data.meals || []);
    } catch (error) {
      console.error('Error al cargar las recetas:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecetas();
  }, []);

  return (
    <div>
      <h1>🍽️ Recetas de Mariscos</h1>
      <p>Descubre deliciosas recetas con mariscos frescos</p>
      {loading ? (
        <p>Cargando recetas...</p>
      ) : (
        <div className="grid">
          {recetas.length
            ? recetas.map((receta) => <Card key={receta.idMeal} data={receta} />)
            : <p>No se encontraron recetas</p>}
        </div>
      )}
    </div>
  );
};

export default Home;
