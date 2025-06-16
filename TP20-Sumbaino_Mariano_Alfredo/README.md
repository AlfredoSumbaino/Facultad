# TP20 - API de Frutas 🍎🍌🍇

## Descripción
API RESTful para gestionar frutas usando Node.js, Express y MongoDB.

## Instalación

1. Clona el repositorio o descarga el proyecto.
2. Instala las dependencias:
   ```bash
   npm install -y
   npm install express
   npm install zod      # Es necesario para validar la creación del objeto
   ```
3. Configura tu string de conexión a MongoDB en el archivo `.env`:
   ```env
   MONGODB_URLSTRING=mongodb+srv://usuario:contraseña@cluster.mongodb.net/
   PORT=3000
   ```

## Requisitos previos
- Node.js (v14 o superior)
- Una cuenta de MongoDB Atlas o una instancia local de MongoDB

## Uso
Conexión a una base de datos de FRUTAS, donde tendremos los siguientes atributos:
- `id`: se genera automáticamente por código
- `nombre`: nombre de la fruta
- `precio`: precio mayor a 0
- `imagen`: el emoji (opcional)

### Iniciar el servidor
```bash
npm start
```
El servidor corre por defecto en [http://localhost:`PORT`](http://localhost:`PORT`)

## Endpoints

| Método | Ruta                        | Descripción                                 |
|--------|-----------------------------|---------------------------------------------|
| GET    | /frutas/all                 | Devuelve todas las frutas                   |
| POST   | /frutas                     | Agrega una fruta                            |
| DELETE | /frutas/:id                 | Elimina una fruta por id                    |
| PUT    | /frutas/:id                 | Actualiza una fruta por id                  |

### Ejemplo de uso de cada endpoint

- **GET**
  ```bash
  http://localhost:3000/frutas/all
  ```

- **POST**
  ```bash
  POST http://localhost:3000/frutas?nombre=Manzana&precio=100&imagen=🍎
  ```
  **Cuerpo esperado (si fuera por body JSON):**
  ```json
  {
    "nombre": "Manzana",
    "precio": 100,
    "imagen": "🍎"
  }
  ```

- **PUT**
  ```bash
  PUT http://localhost:3000/frutas/17?precio=600
  ```
  **Cuerpo esperado (si fuera por body JSON):**
  ```json
  {
    "nombre": "Manzana",
    "precio": 600,
    "imagen": "🍎"
  }
  ```

- **DELETE**
    ```bash
  DELETE http://localhost:3000/frutas/17

  ```

## Ejemplo de respuesta de POST
```json
{
  "nombre": "Manzana",
  "precio": 100,
  "imagen": "🍎",
  "id": 1
}
```

## Notas
- El campo `precio` debe ser un número mayor a 0.
- El campo `nombre` es obligatorio.
- El campo `imagen` es opcional.

## Autor
Mariano Alfredo Sumbaino

---
> TP20 - Programación 2