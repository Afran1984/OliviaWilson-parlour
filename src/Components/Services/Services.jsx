import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import useOrderCard from "../hooks/useOrderCard";

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [showAll, setShowAll] = useState(false);
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useOrderCard();

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((res) => {
                // const data = res.slice(0, 3);
                setServices(res); 
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
                setLoading(false); // Ensure loading is false even if there's an error
            });

    }, []);

    const displayServices = showAll ? services : services.slice(0, 3); 

    const handleAddtoCard = order => {
        console.log(order);
       if(user && user.email) {
        // send Order to Data base
        const orderItem = {
            menuId: order._id,
            email: user.email,
            serviceName: order.name,
            servicePrice: order.price,
            serviceImage: order.image
        }
        axios.post('http://localhost:5000/userOrder', orderItem)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                alert('Order placed successfully!');
                // You could also use a nicer toast notification here
            } else {
                alert('Order received but no database confirmation');
            }
            refetch();

        })
       }
       else{
            navigate('/login', {state: {from: location}})
       }
    }

    // Display a loading message while data is being fetched
    if (loading) {
        return (
            <div className='min-h-screen bg-white flex justify-center items-center'>
              <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800'></div>
              <p className='ml-4 text-purple-800'>Loading...</p>
            </div>
          );
    }

    // Display the services once data is fetched
    return (
        <div className="p-8">
            <h1 className="text-4xl mt-7 text-center font-mono font-bold">
                Our Awesome <span className="text-[#af5b77]">Services</span>
            </h1>

            <div className="grid grid-cols-3 text-center gap-4 mt-10">
                {displayServices.map((service) => (
                    <div key={service.id} className="px-4 py-6">
                        <img src={service.image} alt={service.name} />
                       <Link ><h2 onClick={() => handleAddtoCard(service)} className="font-mono font-bold">{service.name}</h2></Link> 
                        <p className="text-center badge badge-secondary">{service.price}</p>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <button className="bg-[#F63E7B] px-4 py-2 hover:scale-110 cursor-pointer transition-all rounded-sm text-white" onClick={()=>setShowAll(!showAll)}>
                    {showAll ? "Show Less" : "Explore more"}
                </button>
            </div>
        </div>
    );
};

export default Services;
