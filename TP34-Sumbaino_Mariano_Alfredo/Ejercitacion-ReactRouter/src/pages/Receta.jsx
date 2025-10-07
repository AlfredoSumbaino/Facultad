import React, { useState, useEffect } from 'react';
// TODO: Importar useNavigate y useParams de react-router-dom
import { useParams, useNavigate } from 'react-router-dom';

const Receta = () => {
  const [receta, setReceta] = useState(null);
  // TODO: Usar useParams para obtener el id
  // TODO: Usar useNavigate para la navegación
  const { id } = useParams();
  const navigate = useNavigate();

  const getReceta = async () => {
    try {
      // TODO: Usar el id obtenido de useParams
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      setReceta(data.meals[0]);
    } catch (error) {
      console.error('Error al cargar la receta:', error);
    }
  };

  useEffect(() => {
    getReceta();
  }, [id]);

  // TODO: Implementar handleGoBack usando useNavigate
  const handleGoBack = () => {
    navigate(-1); // ✅ Volver a la página anterior
  };

  return (
    <div className="receta-detail">
      {receta ? (
        <>
          <h2>{receta.strMeal}</h2>
          <div className="card">
            <img src={receta.strMealThumb} alt="receta-detalle" />
            <p><strong>Instrucciones:</strong></p>
            <p>{receta.strInstructions}</p>
            <p><strong>Ingredientes:</strong></p>
            <ul>
              {[...Array(20)].map((_, index) => {
                const ingredient = receta[`strIngredient${index + 1}`];
                const measure = receta[`strMeasure${index + 1}`];
                if (ingredient && ingredient.trim()) {
                  return (
                    <li key={index}>
                      {measure && measure.trim() ? `${measure} ` : ''}{ingredient}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            {receta.strCategory && <p><strong>Categoría:</strong> {receta.strCategory}</p>}
            {receta.strArea && <p><strong>Origen:</strong> {receta.strArea}</p>}
          </div>
          {/* TODO: Implementar el botón con useNavigate */}
          <button onClick={handleGoBack}>⬅ Volver atrás</button>
        </>
      ) : (
        <p>Cargando receta...</p>
      )}
    </div>
  );
};

export default Receta;
