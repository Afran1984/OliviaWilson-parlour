import { useEffect, useState } from "react";

const Testimonials = () => {
    const [testimonial, setTestimonial] = useState([]);
    // console.log(testimonial);

    useEffect(()=>{
        fetch("/testimonials.json")
        .then((res) => res.json())
        .then(data => setTestimonial(data));
    },[]);

    return (
        <div className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
        {testimonial.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
              <p className="text-gray-700 mt-4">{testimonial.review}</p>
              <div className="flex mt-4 text-yellow-500">
                {'⭐'.repeat(5)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        <span className="h-3 w-3 bg-gray-400 rounded-full"></span>
        <span className="h-3 w-3 bg-gray-600 rounded-full"></span>
        <span className="h-3 w-3 bg-gray-400 rounded-full"></span>
      </div>
    </div>
    );
};

export default Testimonials;