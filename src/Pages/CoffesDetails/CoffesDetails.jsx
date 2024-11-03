
import PropTypes, { object } from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import nutritionImage from '../../assets/nutrition.png'

const CoffesDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [coffee, setCoffee] = useState({})

    useEffect(()=>{
        const singleDate = data.find(coffee => coffee.id == id)
        setCoffee(singleDate)
    },[data, id])

    const {name,image,rating,popularity,description,nutrition_info,ingredients,making_process} = coffee

    return (
        <div className='my-12'>
            <h2 className='text-2xl md:text-4xl font-thin mb-6'>{description}</h2>
            <div className='w-full h-full md:h-[500px] object-cover overflow-hidden rounded-xl shadow-xl'>
                <img className='w-full h-full' src={image} alt="" />
            </div>
            {/* title  and btn*/}
            <div className='flex justify-between items-center my-6'>
                <div>
                    <h2 className='text-2xl md:text-3xl font-thin'>Name :{name}</h2>
                    <p className='text-base'>Popularity : {popularity}</p>
                    <p className='text-base'>Rating : {rating}</p>
                </div>
                <div>
                    <button className='btn btn-warning'>Add to Favorite</button>
                </div>
            </div>
            {/* making process */}
            <div className='my-6'>
                <h2 className='text-2xl font-thin'>Making process :</h2>
                <p>{making_process}</p>
            </div>

            <div className='flex justify-between items-center my-6'>
                <div className='flex-1'>
                    <div className='fex flex-col justify-center gap-6'>
                        <h2 className='text-2xl font-thin'>Ingredients : </h2>
                        <ul className='text-xl ml-12'>
                            {
                            ingredients && 
                            ingredients.map(i =>(
                                <li className='list-disc' key={i}>{i}</li>
                            ))
                            }
                        </ul>
                        <h2 className='text-2xl font-thin'>nutrition : </h2>
                        <ul className='text-xl ml-12'>
                            {
                            nutrition_info && 
                            Object.keys( nutrition_info).map(n =>(
                                <li className='list-disc' key={nutrition_info[n]}>{n} : {nutrition_info[n]}</li>
                            ))
                            }
                        </ul>
                    </div>
                </div>


                <div className='flex-1'>
                    <img src={nutritionImage} alt="" />
                </div>
            </div>
             
        </div>
    );
};

CoffesDetails.propTypes = {
    coffee:PropTypes.object
};

export default CoffesDetails;