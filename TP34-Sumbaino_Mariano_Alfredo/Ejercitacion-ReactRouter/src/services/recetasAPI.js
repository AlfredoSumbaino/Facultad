// 🌐 Servicio para interactuar con TheMealDB API
// OPCIONAL: Pueden usar este servicio para organizar mejor su código
// También pueden usar fetch directamente en los componentes

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

/**
 * Obtiene una lista de recetas por categoría
 * @param {string} categoria - Categoría de recetas (ej: 'Seafood', 'Dessert')
 * @returns {Promise<Array>} Lista de recetas
 */
export const getRecetasPorCategoria = async (categoria = "Seafood") => {
  try {
    const response = await fetch(`${BASE_URL}/filter.php?c=${categoria}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error al obtener recetas por categoría:", error);
    throw error;
  }
};

/**
 * Obtiene los detalles de una receta específica
 * @param {string} id - ID de la receta
 * @returns {Promise<Object|null>} Detalles de la receta
 */
export const getRecetaPorId = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error("Error al obtener receta por ID:", error);
    throw error;
  }
};

// 💡 Ejemplo de uso básico:
//
// import { getRecetasPorCategoria, getRecetaPorId } from '../services/recetasAPI';
//
// // En lugar de:
// const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
// const data = await res.json();
//
// // Puedes usar:
// const recetas = await getRecetasPorCategoria('Seafood');
// const receta = await getRecetaPorId('52959');

// ⚠️ NOTA: Este archivo es OPCIONAL
// Pueden implementar fetch directamente en sus componentes
// Este servicio es para mostrar buenas prácticas de organización de código
