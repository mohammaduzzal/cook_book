
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import  { Toaster } from 'react-hot-toast';


const MainLayouts = () => {
    return (
        <div>
              <Toaster />
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