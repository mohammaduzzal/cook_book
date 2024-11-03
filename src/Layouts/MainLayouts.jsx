
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


const MainLayouts = () => {
    return (
        <div>
            {/* navbar */}
            <div className="h-16">
            <Navbar></Navbar>
            </div>
           
            {/* dynamic section */}
            <div className="min-h-[calc(100vh-232px)] container mx-auto px-12">
                <Outlet></Outlet>
            </div>
            
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;