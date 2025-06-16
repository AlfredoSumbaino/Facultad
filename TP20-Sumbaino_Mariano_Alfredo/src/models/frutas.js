const z = require('zod')

const frutaSchema = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio'),
  precio: z.number().min(0, 'El precio debe ser un número positivo'),
  imagen: z.string().optional(),
  id: z.number().min(1, 'El id debe ser un número positivo'),
})

function validarCon(campos) {
  return frutaSchema.safeParse(campos)
}
function validarConParcialmente(campos) {
  return frutaSchema.partial().safeParse(campos)
}
module.exports = {
  validarCon,
  validarConParcialmente,
}