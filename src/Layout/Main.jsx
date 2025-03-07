import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/SharePage/Footer/Footer";
import Navbar from "../Pages/SharePage/Navbar/Navbar";
const Main = () => {
    const location = useLocation();
    console.log(location);
    const isLoginPage = location.pathname.includes('login');
    const isRegistrationpage = location.pathname.includes('registration');

    return (
        <div>
            {!isLoginPage && <Navbar></Navbar>}
            <Outlet></Outlet>
            {!(isLoginPage || isRegistrationpage) && <Footer></Footer>}
        </div>
    );
};

export default Main;