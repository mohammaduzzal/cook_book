import { useEffect, useState } from "react";
import Heading from "../../Components/Heading/Heading";
import { getAllFavorites, removeFavorite } from "../../Utility/Index";
import Card from "../../Components/Card/Card";



const Dashboard = () => {
    
    const [coffees, setCoffees] = useState([])
    useEffect(()=>{
        const favorites = getAllFavorites()
        setCoffees(favorites)
    },[])
    // console.log(location);

    const handleRemove = id =>{
        removeFavorite(id)
        const favorites = getAllFavorites()
        setCoffees(favorites)
    }




    return (
        <>
            <Heading title={'Welcome to Dashboard'} subtitle={'Manage coffee that you have added as favorite.You can view or remove them from here'}></Heading>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
        {
          coffees.map(coffee => <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee}></Card>)
        }
  </div>
        </>
    );
};

export default Dashboard;
