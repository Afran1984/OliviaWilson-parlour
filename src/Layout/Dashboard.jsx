import { NavLink, Outlet } from "react-router-dom";
import Sharnav from "../Pages/Dashboard/Sharnav/Sharnav";
import { useState } from "react";


const Dashboard = () => {
    const [activeButton, setActiveButton] = useState();
    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    }
    return (
        <div className="">
            <Sharnav activeButton={activeButton}></Sharnav>
            <div className="flex">
                <div className="w-64 mt-20 min-h-full bg-white">
            
                    <ul className="menu gap-2">
                        <li onClick={() => handleClick("BOOK")}><NavLink to="/dashboard/book"> BOOK</NavLink> </li>
                        <li onClick={() => handleClick("BOOKING LIST")}> <NavLink to="/dashboard/orderdata">BOOKING LIST</NavLink></li>
                        <li onClick={() => handleClick("APPOINMENT LIST")}> <NavLink to="/dashboard/appoinment">APPOINMENT LIST</NavLink></li>
                        <li onClick={() => handleClick("REVIEW")}> <NavLink to="/dashboard/review">REVIEW</NavLink></li>
                        <li></li>

                    </ul>

                </div>
                <div className="flex-1 bg-[#F4F7FC] mt-20">
                    <Outlet></Outlet>
                </div>
                
            </div>
        </div>
    );
};

export default Dashboard;