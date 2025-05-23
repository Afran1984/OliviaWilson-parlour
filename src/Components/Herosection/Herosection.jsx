import { useEffect, useState } from "react";

const Herosection = () => {
  const [user, setUsers] = useState([]);
  const [Services, setServices] = useState([]);

  console.log('user', user);

  useEffect(() =>{
    fetch("http://localhost:5000/usersInfo")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
    .then(res => res.json())
    .then(data => setServices(data))
  },[]);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-pink-50 p-8 mt-5">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://i.ibb.co.com/KzDHVTvB/engin-akyurt-g-m8-EDc4-X6-Q-unsplash.jpg"
          alt="Facial Treatment"
          className="rounded-xl shadow-lg h-80 w-90"
        />
      </div>
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Let us handle your screen <span className="text-pink-500">Professionally.</span>
        </h1>
        <p className="text-gray-600 mt-4">
          With well-written codes, we build amazing apps for all platforms,
          mobile and web apps in general ipsum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Purus commodo ipsum.
        </p>
        
        {/* Stats Section */}
        <div className="flex justify-center md:justify-start gap-8 mt-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-pink-500">{user.length}+</h2>
            <p className="text-gray-600 text-sm">Happy Customer</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-pink-500">{Services.length}+</h2>
            <p className="text-gray-600 text-sm">Total Service</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Herosection;