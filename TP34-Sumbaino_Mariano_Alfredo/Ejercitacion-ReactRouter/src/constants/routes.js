// 🛣️ Constantes de rutas para la aplicación
// Puedes usar estas constantes para evitar errores de tipeo

export const ROUTES = {
  HOME: "/home",
  CONTACTO: "/contacto",
  RECETA: "/receta/:id",
  RECETA_DETAIL: (id) => `/receta/${id}`, // Función helper para generar rutas dinámicas
};

// 💡 Ejemplo de uso:
// import { ROUTES } from '../constants/routes';
//
// // En lugar de escribir:
// <Link to="/home">Inicio</Link>
//
// // Usar:
// <Link to={ROUTES.HOME}>Inicio</Link>
//
// // Para rutas dinámicas:
// <Link to={ROUTES.RECETA_DETAIL(receta.idMeal)}>Ver receta</Link>
