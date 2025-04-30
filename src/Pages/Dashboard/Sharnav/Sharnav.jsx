import { useContext } from "react";
import useUser from "../../../Components/hooks/useUser";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const Sharnav = ({ activeButton }) => {

    const { user } = useContext(AuthContext);
    const [userP] = useUser();

    const foundUser = userP.find(user => user.email === user.email);
  const displayName = user?.displayName || `${foundUser?.firstName} ${foundUser?.lastName}`;

    return (
      <div className="navbar fixed z-10 bg-white">
        <div className="navbar-start gap-6">
         <Link to="/">
            <a   className="btn btn-ghost text-xl px-4 py-2 hover:scale-110 cursor-pointer transition-all rounded-sm text-center ">
              <img
                className="w-16 h-10 rounded-lg mx-auto"
                src="https://i.ibb.co.com/TqMDPSWv/Olivia-Wilson.png"
                alt="Olivia Wilson Logo"
              />
              Olivia Wilson
            </a>
         </Link> 
          <h2 className="mt-3 font-mono text-xl">{activeButton ? activeButton : "BOOKING LIST"}</h2>

        </div>
  
        <div className="navbar-end">
          <h2 className="mt-3 font-mono text-xl">{displayName}</h2>
        </div>
      </div>
    );
  };
  
  export default Sharnav;
  