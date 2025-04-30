import { useEffect, useState } from 'react';
import { axiousSecure } from '../../Components/hooks/useAxiousSecure';


const Appoinmentpage = () => {
    const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });
useEffect(() => {
    fetch("http://localhost:5000/services")
  .then(res => res.json())
  .then(data => setServices(data))
},[]);

  console.log('Appoinment services',services);


  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axiousSecure.post('/apoinment', formData);
      alert('Appointment booked successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: ''
      });
    } catch (error) {
      alert('Something went wrong.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto mt-20">
      <h2 className="text-xl mb-4 text-center font-mono font-bold bg-[#F63E7B] p-5">Book Your Appointment</h2>
      <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-2 mb-2 border" />

      <input name="email" type="text" placeholder="Enter Valid Email" value={formData.email} onChange={handleChange} required className="w-full p-2 mb-2 border" />

      <input name="phone" type="text" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-2 mb-2 border" />

      {/* Service Dropdown */}
      <select name="service" value={formData.service} onChange={handleChange} required className="w-full p-2 mb-2 border">
        <option value="">Coose your service</option>
        {services.map((service) => (
        console.log(service), // This will also log each service
        <option value={service.name}>{service.name}</option>
        ))}
      </select>

      <input name="date" type="date" value={formData.date} onChange={handleChange} required className="w-full p-2 mb-2 border" />
      <input name="time" type="time" value={formData.time} onChange={handleChange} required className="w-full p-2 mb-2 border" />
      <button type="submit" className="bg-[#F63E7B] w-full text-black font-mono font-bold p-3">Book Now</button>
    </form>
  );
};

export default Appoinmentpage;
