import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card/Card";
import { useState } from "react";


const Coffes = () => {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState(data)

    const handleSort = sortBy =>{
      if(sortBy === 'popularity'){
        // sort by popularity
        const sortedByPopularity = [...data].sort((a,b) => b.popularity - a.popularity)
        setCoffees(sortedByPopularity)
      }
      else if(sortBy === 'rating'){
        // sort by rating
        const sortedByRating = [...data].sort((a,b) => b.rating - a.rating)
        setCoffees(sortedByRating)

      }
    }

    return (
      <>  
      <div className="flex
       justify-between items-center">
        <div>
          <h2 className="text-3xl font-thin">
          Sort coffee &apos;s by popularity & rating -&gt;
          </h2>
        </div>
        <div className="space-x-4"> 
          <button onClick={()=>handleSort('popularity')} className="btn btn-warning">sort by popularity</button>
          <button onClick={()=>handleSort('rating')} className="btn btn-warning">sort by rating</button>
        </div>
      </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
        {
          coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
        }
  </div>
  </>
    );
};

export default Coffes;