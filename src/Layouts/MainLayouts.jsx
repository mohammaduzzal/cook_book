
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


const MainLayouts = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
            {/* dynamic section */}
            <div className="min-h-[calc(100vh-232px)]">
                <Outlet></Outlet>
            </div>
            
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;