import { useState, useEffect } from 'react';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay (e.g., fetching data)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (isLoading) {
    return (
      <div className='min-h-screen bg-white flex justify-center items-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800'></div>
        <p className='ml-4 text-purple-800'>Loading...</p>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white p-8'>
      <div className='max-w-6xl mx-auto'>
        {/* 1st */}
        <div className='flex flex-col md:flex-row justify-between items-center mt-4'>
          <div className='md:w-1/2'>
            <h1 className='text-4xl font-bold text-purple-800 mb-4'>Makeup Artist</h1>
            <h2 className='text-xl text-gray-600'>Online Classes</h2>
            <p className='text-gray-500 mt-4 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
            <button className='bg-pink-400 text-white py-2 px-6 rounded-lg hover:bg-pink-500 transition'>Read More</button>
            <div className='flex space-x-4 mt-6'>
              <i className='fab fa-instagram text-2xl text-gray-600'></i>
              <i className='fab fa-twitter text-2xl text-gray-600'></i>
              <i className='fab fa-whatsapp text-2xl text-gray-600'></i>
              <i className='fab fa-youtube text-2xl text-gray-600'></i>
            </div>
          </div>
          <div className='md:w-1/2 mt-8 md:mt-0 relative'>
            <div className='absolute -top-10 -right-10 bg-red-300 text-white p-4 rounded-full'>Balance & Beauty</div>
            <img src='https://i.ibb.co.com/KzDHVTvB/engin-akyurt-g-m8-EDc4-X6-Q-unsplash.jpg' alt='Makeup Artist' className='rounded-full shadow-lg' />
            <div className='absolute bottom-4 right-4 bg-purple-300 text-white py-2 px-4 rounded-full'>Best Makeup Tips</div>
          </div>
        </div>
        {/* 2nd */}
        <div className='flex flex-col md:flex-row justify-between items-center mt-4'>
          <div className='md:w-1/2 mt-8 md:mt-0 relative'>
            <img src='https://i.ibb.co.com/KzDHVTvB/engin-akyurt-g-m8-EDc4-X6-Q-unsplash.jpg' alt='Makeup Artist' className='rounded-full shadow-lg' />
            <div className='absolute bottom-4 right-4 bg-purple-300 text-white py-2 px-4 rounded-full'>Best Makeup Tips</div>
          </div>

          <div className='md:w-1/2'>
            <h1 className='text-4xl font-bold text-purple-800 mb-4'>Makeup Artist</h1>
            <h2 className='text-xl text-gray-600'>Online Classes</h2>
            <p className='text-gray-500 mt-4 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
            <button className='bg-pink-400 text-white py-2 px-6 rounded-lg hover:bg-pink-500 transition'>Read More</button>
            <div className='flex space-x-4 mt-6'>
              <i className='fab fa-instagram text-2xl text-gray-600'></i>
              <i className='fab fa-twitter text-2xl text-gray-600'></i>
              <i className='fab fa-whatsapp text-2xl text-gray-600'></i>
              <i className='fab fa-youtube text-2xl text-gray-600'></i>
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div className='flex flex-col md:flex-row justify-between items-center mt-4'>
          <div className='md:w-1/2'>
            <h1 className='text-4xl font-bold text-purple-800 mb-4'>Makeup Artist</h1>
            <h2 className='text-xl text-gray-600'>Online Classes</h2>
            <p className='text-gray-500 mt-4 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
            <button className='bg-pink-400 text-white py-2 px-6 rounded-lg hover:bg-pink-500 transition'>Read More</button>
            <div className='flex space-x-4 mt-6'>
              <i className='fab fa-instagram text-2xl text-gray-600'></i>
              <i className='fab fa-twitter text-2xl text-gray-600'></i>
              <i className='fab fa-whatsapp text-2xl text-gray-600'></i>
              <i className='fab fa-youtube text-2xl text-gray-600'></i>
            </div>
          </div>
          <div className='md:w-1/2 mt-8 md:mt-0 relative'>
            <img src='https://i.ibb.co.com/KzDHVTvB/engin-akyurt-g-m8-EDc4-X6-Q-unsplash.jpg' alt='Makeup Artist' className='rounded-full shadow-lg' />
            <div className='absolute bottom-4 right-4 bg-purple-300 text-white py-2 px-4 rounded-full'>Best Makeup Tips</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;