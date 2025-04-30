import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/SharePage/Footer/Footer";
import Navbar from "../Pages/SharePage/Navbar/Navbar";
const Main = () => {
    const location = useLocation();
    console.log(location);
    const isLoginPage = location.pathname.includes('login');
    const isRegistrationpage = location.pathname.includes('registration');
    const isAppoinmentPage = location.pathname.includes('apoinment')

    return (
        <div>
            {!(isLoginPage || isAppoinmentPage) && <Navbar></Navbar>}
            <Outlet></Outlet>
            {!(isLoginPage || isRegistrationpage || isAppoinmentPage) && <Footer></Footer>}
        </div>
    );
};

export default Main;