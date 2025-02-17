import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

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
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <div className="w-full max-w-2xl p-8 rounded-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
          Let us handle your <br /> <span className="text-gray-700">project, professionally.</span>
        </h2>
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
          <div className='text-center'>
          <button type="submit" className="bg-[#F63E7B] px-4 py-2 hover:scale-110 cursor-pointer transition-all rounded-sm text-white">
            Send Message
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

