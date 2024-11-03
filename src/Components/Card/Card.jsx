
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { FaRegTrashCan } from "react-icons/fa6";

const Card = ({coffee,handleRemove}) => {
  const {pathname} = useLocation()


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
        {
          pathname === '/Dashboard' && (
            <div onClick={()=> handleRemove(id)} className='absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5'><FaRegTrashCan size={20}/></div>
          )
        }
      </div>
    );
};

Card.propTypes = {
    coffee:PropTypes.object
};

export default Card;