import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from 'react-helmet-async';



const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [loadings, setLoadings] = useState(false); // Initialize loading as false

  const [isLoading, setIsLoading] = useState(true);
  
    // Simulate a loading delay (e.g., fetching data)
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false); // Set loading to false after 2 seconds
      }, 2000);
  
      return () => clearTimeout(timer); // Cleanup the timer
    }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoadings(true); // Set loading to true when the email is being sent

    emailjs
      .sendForm('service_lp92t6h', 'template_7ud6628', form.current, {
        publicKey: '1xP9DdPLn89TKnsPE',
      })
      .then(
        () => {
          setSuccessMessage('Your message has been sent successfully! 🎉');
          form.current.reset(); // Clears the form
          setTimeout(() => setSuccessMessage(''), 5000); // Hide message after 5 sec
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccessMessage('Failed to send the message. Please try again.'); // Show error message
        }
      )
      .finally(() => {
        setLoadings(false); // Reset loading to false after the email is sent (success or failure)
      });
  };
  
  if (isLoading) {
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
        <title>Olivia | Contact</title>
      </Helmet>
        <div className='grid grid-cols-2 justify-center'>
            <div className="text-center mt-32">
                <h1 className='text-2xl font-mono'>
                <Typewriter
                    words={["CONTACT INFORMATION"]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </h1>
            <h1 className='text-2xl font-mono font-bold'>MD. Abdur Razzak</h1>
                <p className='font-mono font-semibold'>Managing Director (MD)</p>
                <div>
                   <p><a className="hover:underline font-mono" href="tel:+8801717663447">+8801717663447</a></p> 
                   <a className="hover:underline font-mono" href="mailto:afranrazzak1984@gmail.com">afranrazzak1984@gmail.com</a>
                    <p className='font-mono'>#R-3 Mozaffer Nagor /3985</p>
                </div>
            </div>
            <div className='text-center ml-20'>
                <img className='w-70 h-80 rounded-xl' src="https://i.ibb.co.com/KzDHVTvB/engin-akyurt-g-m8-EDc4-X6-Q-unsplash.jpg" alt="" />
            </div>
        </div>
        {/* Contact Box */}
        <div className="flex justify-center items-center min-h-screen bg-pink-50">
            <div className="w-full max-w-2xl rounded-lg">
                {successMessage && (
                <p className="text-black bg-primary text-center font-mono font-bold text-2xl mb-4">{successMessage}</p>
                )}
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="user_name" placeholder="Full Name" className="p-3 border rounded-md w-full" required />
                    <input type="text" name="last_name" placeholder="Last Name" className="p-3 border rounded-md w-full" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <input type="email" name="user_email" placeholder="Email Address" className="p-3 border rounded-md w-full" required />
                    <input type="tel" name="phone_number" placeholder="Phone Number" className="p-3 border rounded-md w-full" required />
                </div>
                <textarea name="message" placeholder="Your Message" className="p-3 border rounded-md w-full h-28" required />
                <div className="text-center">
                    <button
                    type="submit"
                    className="bg-[#F63E7B] px-4 py-2 hover:scale-110 cursor-pointer transition-all rounded-sm text-white relative"
                    disabled={loadings} // Disable the button while loading
                    >
                    {loadings ? (
                        <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span className="ml-2">Sending...</span>
                        </div>
                    ) : (
                        'Send Message'
                    )}
                    </button>
                </div>
                </form>
            </div>
        </div>
        
    </div>
  );
};

export default Contact;