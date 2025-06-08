const z = require('zod')

const counSchema = z.object({
  pais: z.string().min(1, 'El nombre es obligatorio'),
  idioma: z.array(
    z.enum([
      'Italiano',
      'Maltés',
      'Inglés',
      'Francés',
      'Alemán',
      'Español',
      'Coreano',
      'Chino', 
      'Ruso', 
      'Árabe', 
    ])
  ),
  continente: z.string().min(1, 'El director es obligatorio'),
})

function validarCon(campos) {
  return counSchema.safeParse(campos)
}
function validarConParcialmente(campos) {
  return counSchema.partial().safeParse(campos)
}
module.exports = {
  validarCon,
  validarConParcialmente,
}