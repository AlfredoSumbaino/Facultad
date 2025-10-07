// TODO: Importar Link de react-router-dom
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.strMeal}</h3>
      <img src={data.strMealThumb} alt="receta" />
      {/* TODO: Convertir esto en un Link */}
      <Link
        to={`/receta/${data.idMeal}`}
        style={{ color: '#3b82f6', 
          textDecoration: 'none', cursor: 'pointer' }}
      >
        Ver receta completa
      </Link>
    </div>
  );
};

export default Card;
