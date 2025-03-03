import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Herosection from "../../Components/Herosection/Herosection";
import Testimonials from "../../Components/Testimonials/Testimonials";
import { ContactForm } from "../../Components/ContactForm/ContactForm";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
const Home = () => {
    // const [isLoading, setIsLoading] = useState(true);
    
    //   // Simulate a loading delay (e.g., fetching data)
    //   useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setIsLoading(false); // Set loading to false after 2 seconds
    //     }, 2000);
    
    //     return () => clearTimeout(timer); // Cleanup the timer
    //   }, []);
    
    //   if (isLoading) {
    //     return (
    //       <div className='min-h-screen bg-white flex justify-center items-center'>
    //         <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800'></div>
    //         <p className='ml-4 text-purple-800'>Loading...</p>
    //       </div>
    //     );
    //   }

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() =>{
            setLoading(false);
        }, 2000);
        return() => clearTimeout(timer);
    },[]);

    if(loading){
        return (
            <div className='min-h-screen bg-white flex justify-center items-center'>
             <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800'></div>
             <p className='ml-4 text-purple-800'>Loading...</p>
           </div>
        );
    }

    return (
        <div>
            <Helmet>
                <title>Olivia || Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <Herosection></Herosection>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>


        </div>
    );
};

export default Home;