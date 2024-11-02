import Banner from "../../Components/Banner/Banner";
import Heading from "../../Components/Heading/Heading";


const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* heading */}
            <Heading title={'Browse Coffees by Category'} subtitle={'Choose Your Desire Coffee Category To Browse Through Specific Coffees That Fit Your Taste'}></Heading>
            {/* category tab section */}
            {/* dynamic nested components */}
        </div>
    );
};

export default Home;