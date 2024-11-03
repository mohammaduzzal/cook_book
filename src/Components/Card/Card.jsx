
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({coffee}) => {
    const {id,name,image,category,origin,type,rating,popularity,} = coffee || {}
    return (
        <div className="flex flex-col relative">
            <Link 
            to={`/coffes/${id}`}
             className='transition hover:scale-105 shadow-xl rounded-xl overflow-hidden'>
        <figure className='w-full h-48 overflow-hidden'>
          <img
            src={image}
            alt={name} />
        </figure>
        <div className="p-4">
          <h2 className="">name:  {name}</h2>
          <p>category : {category}</p>
          <p>type: {type}</p>
          <p>origin: {origin}</p>
          <p>rating : {rating}</p>
          <p>popular : {popularity}</p>
      
        </div>
        </Link>
      </div>
    );
};

Card.propTypes = {
    coffee:PropTypes.object
};

export default Card;