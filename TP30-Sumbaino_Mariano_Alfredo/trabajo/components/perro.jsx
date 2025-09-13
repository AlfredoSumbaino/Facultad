
export default function Perro({ perros }) {
    return ( 
    <>
    <h1>Nuestros Pacientes</h1>
    {perros.map((perro, idx) => (
    <ul key={idx}> 
        <li><strong>Nombre:</strong> {perro.nombre}</li>
        <li><strong>Edad:</strong> {perro.edad}</li>
        <li><strong>Sexo:</strong> {perro.sexo}</li>
        <li><strong>Raza:</strong> {perro.raza}</li>
        <li><strong>Tamaño de la Raza:</strong> {perro.tamaño}</li>
    </ul>
    ))}
    </>
    );
}