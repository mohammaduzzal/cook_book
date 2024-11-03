import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import Heading from "../../Components/Heading/Heading";


const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* heading */}
            <Heading title={'Browse Coffees by Category'} subtitle={'Choose Your Desire Coffee Category To Browse Through Specific Coffees That Fit Your Taste'}></Heading>
            {/* category tab section */}
            <Categories categories={categories}></Categories>
            {/* dynamic nested components */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;