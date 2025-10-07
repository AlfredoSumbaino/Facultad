# 🍽️ Recetario Digital - Ejercitación React Router

## 📋 Descripción

Este proyecto es una **ejercitación integradora** para aprender React Router implementando un catálogo de recetas de cocina. Los estudiantes trabajarán con rutas dinámicas, anidadas y navegación programática usando la API pública de TheMealDB.

## 🎯 Objetivos de Aprendizaje

- Implementar **React Router** para navegación entre páginas
- Crear **rutas dinámicas** con parámetros
- Utilizar **rutas anidadas** para preservar componentes
- Implementar navegación programática con **useNavigate**
- Consumir una **API REST** pública
- Manejar **estados de carga** y datos asincrónicos

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd Ejercitacion-ReactRouter
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar el proyecto**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Card.jsx         # Tarjeta para mostrar recetas
│   └── Navbar.jsx       # Barra de navegación
├── pages/               # Páginas/vistas de la aplicación
│   ├── Home.jsx         # Página principal con lista de recetas
│   ├── Receta.jsx       # Página de detalle de receta
│   └── Contacto.jsx     # Página de contacto
├── services/            # Servicios para APIs (opcional)
│   └── recetasAPI.js    # Funciones para interactuar con la API
├── constants/           # Constantes de la aplicación
│   └── routes.js        # Definición de rutas
├── App.jsx              # Componente principal con router
├── main.jsx             # Punto de entrada
└── index.css            # Estilos globales
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **React Router DOM 6** - Enrutamiento para aplicaciones React
- **Vite** - Herramienta de construcción y desarrollo
- **TheMealDB API** - API pública de recetas de cocina

## 📚 Instrucciones del Ejercicio

### ✅ Tareas a Completar

1. **Configurar el Router Principal**
   - Envolver la aplicación con `BrowserRouter`
   - Definir las rutas principales
   - Actualizar imports para usar la nueva estructura `pages/`

2. **Implementar las Rutas**
   - `/home` - Lista de recetas por categoría
   - `/contacto` - Información de contacto
   - `/receta/:id` - Detalle de una receta específica

3. **Crear la Navegación**
   - Completar el componente `Navbar`
   - Implementar `Link` para la navegación
   - Usar rutas anidadas para preservar la navbar

4. **Funcionalidad de Detalle**
   - Implementar `useParams` para obtener el ID
   - Hacer fetch de la receta específica
   - Agregar botón "Volver atrás" con `useNavigate`

5. **Buenas Prácticas (Opcional)**
   - Usar servicios de `services/recetasAPI.js` para organizar código
   - Utilizar constantes de rutas de `constants/routes.js`
   - Mantener componentes separados en carpetas organizadas

### 🎯 Rutas a Implementar

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | `Home` | Redireccionar a `/home` |
| `/home` | `Home` | Lista de recetas de mariscos |
| `/contacto` | `Contacto` | Información de contacto |
| `/receta/:id` | `Receta` | Detalle de receta específica |

## 🌐 API Utilizada

**TheMealDB API** - API gratuita de recetas de cocina

### Endpoints principales:
- **Lista por categoría**: `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
- **Detalle de receta**: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`

### Estructura de datos:
```json
{
  "meals": [
    {
      "idMeal": "52959",
      "strMeal": "Baked salmon with fennel & tomatoes",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
      "strInstructions": "Instrucciones de preparación...",
      "strIngredient1": "Salmon",
      "strMeasure1": "1 whole"
    }
  ]
}
```

## 🎨 Características del Proyecto

- **Diseño Responsive** - Adaptable a diferentes tamaños de pantalla
- **Estados de Carga** - Indicadores mientras se cargan los datos
- **Navegación Intuitiva** - Enlaces claros entre páginas
- **Detalles Ricos** - Ingredientes, instrucciones e imágenes
- **Historial de Navegación** - Botón para volver atrás

## 🏆 Criterios de Evaluación

- ✅ **Configuración correcta** de React Router
- ✅ **Implementación de rutas** dinámicas y anidadas
- ✅ **Navegación funcional** entre componentes
- ✅ **Consumo correcto** de la API
- ✅ **Manejo de estados** de carga y error
- ✅ **Uso apropiado** de hooks de React Router

## 🤝 Contribuciones

Este es un proyecto educativo. Los estudiantes deben completar las tareas de forma individual siguiendo las instrucciones del profesor.

## 📞 Contacto y Soporte

Para dudas sobre la ejercitación, contactar al equipo docente durante las clases prácticas.

---

**¡Que disfruten cocinando con React Router! 👨‍🍳👩‍🍳**
