
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import nutritionImage from '../../assets/nutrition.png'
import { addFavorite, getAllFavorites } from '../../Utility/Index';

const CoffesDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [coffee, setCoffee] = useState({})
    const [isDisable, setDisable] = useState(false)

    useEffect(()=>{
        const singleDate = data.find(coffee => coffee.id == id)
        setCoffee(singleDate)

        const dear = getAllFavorites()
        const isExist = dear.find(item => item.id == singleDate.id)
        if(isExist){
            setDisable(true)
        }


    },[data, id])

    const {name,image,rating,popularity,description,nutrition_info,ingredients,making_process} = coffee


    const handleFavorite = coffee =>{
        addFavorite(coffee)
        setDisable(true)
        
    }

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
                    <button disabled={isDisable} onClick={()=>handleFavorite(coffee)} className='btn btn-warning'>Add to Favorite</button>
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
                            ingredients.map((i,idx) =>(
                                <li className='list-disc' key={idx}>{i}</li>
                            ))
                            }
                        </ul>
                        <h2 className='text-2xl font-thin'>nutrition : </h2>
                        <ul className='text-xl ml-12'>
                            {
                            nutrition_info && 
                            Object.keys( nutrition_info).map((n,idx) =>(
                                <li className='list-disc' key={idx} >{n} : {nutrition_info[n]}</li>
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


export default CoffesDetails;