import { Link } from "react-router-dom";
const Navbar = () => {

  const navOption = <>
    <li><Link to="/">HOME</Link></li>
    <li><Link to="/portfolio">OUR PORTFOLIO</Link></li>
    <li><Link to="/ourteam">OUR TEAM</Link></li>
    <li><Link to="/contact">CONTACT US</Link></li>
  </>
    return (
        <>
           <div className="navbar fixed z-10 bg-pink-50">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                      {navOption}
                    </ul>
                </div>
            <a className="btn btn-ghost text-xl px-4 py-2 hover:scale-110 cursor-pointer transition-all rounded-sm text-center "><img className='w-16 h-10 rounded-lg mx-auto ' src="https://i.ibb.co.com/TqMDPSWv/Olivia-Wilson.png" alt="" />Olivia Wilson</a>
          </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navOption}
              </ul>
            </div>
            <div className="navbar-end">
            <Link to="/login"><button className=" bg-[#F63E7B] px-4 py-2 hover:scale-110 cursor-pointer transition-all rounded-sm text-white ">LOGIN</button></Link>
            </div>
          </div>
        </>
    );
};

export default Navbar;