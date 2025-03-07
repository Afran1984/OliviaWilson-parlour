import { FcGoogle } from "react-icons/fc";
import Logo from "../../../public/image/logo.png";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";


const Login = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [email, setUserEmail] = useState("");
    const [password, setUserPassword] = useState("");

    const handleLogin = (e) =>{
      e.preventDefault();
      console.log("loging In whit", email, password);
      e.target.reset();
      setUserEmail("");
      setUserPassword("");

    }

    useEffect(() => {
        const timer = setTimeout( () => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
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
    <div className="grid grid-cols-2 bg-gray-100">
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className='text-2xl font-mono'>
                        <Typewriter
                            words={["Olivia Wilson"]}
                            loop={false}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h1>
        <img
          src={Logo}// Replace with actual logo
          alt="Jerin's Parlour"
          className="mx-auto h-20 w-20 mb-2"
        />
        <h2 className="text-xl font-semibold">Olivia Wilson</h2>

        <h3 className="mt-6 text-lg font-bold">Login With</h3>

        <button className="mt-4 flex items-center justify-center w-80 py-2 border rounded-full shadow-md bg-white text-black hover:bg-gray-100">
        <FcGoogle size={20} className="mr-5"></FcGoogle>
          Continue with Google
        </button>
      </div>
    </div>
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full p-2 border rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setUserPassword(e.target.value)}
              className="w-full p-2 border rounded mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#F63E7B] text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
          <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
         <Link to="/registration"><a href="#" className="text-pink-500">
            Create an account
          </a></Link> 
        </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
