import { useContext, useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


export default function Registration() {
    const [isLoading, setIsLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {createUser} = useContext(AuthContext);
  const navigate = useNavigate();
  

//   Looding
useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
}, []);

  const handleRegister = (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    createUser(username, password)
      .then( async (result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // alert("Registration Successful");
        const userData = {
          firstName,
          lastName,
          email: username,
          uid: loggedUser.uid,
        };

        try{
          const response = await fetch("http://localhost:5000/usersInfo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });
          const data = await response.json();
          if(data.insertedId) {
            console.log("user has been Saved DB", data);
          }
        }catch (error) {
          console.log("Failed to save DB", error);
        }
  
        // Reset form only after success
        e.target.reset();
        setFirstName("");
        setLastName("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");

        navigate('/');
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        alert("Registration failed. Please try again.");
      });
  };
  


//   setLoadding
if (isLoading) {
    return (
      <div className='min-h-screen bg-white flex justify-center items-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800'></div>
        <p className='ml-4 text-purple-800'>Loading...</p>
      </div>
    );
  }





  return (
    <div className="flex items-center justify-center h-100% bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-7/12">
        <h2 className="text-2xl font-bold text-center mb-6">Create an account</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 border-b mb-3"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-2 border-b mb-3"
            required
          />
          <input
            type="text"
            placeholder="Username or Email"
            value={username}
            name="email"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border-b mb-3"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border-b mb-3"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border-b mb-6"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#F63E7B] text-white py-2 rounded hover:bg-pink-600 transition"
          >
            Create an account
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="/login" className="text-pink-500">Login</a>
        </p>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <button className="flex items-center justify-center w-full py-2 border rounded mb-3">
          <FaFacebook className="text-blue-600 mr-2" /> Continue with Facebook
        </button>
        <button className="flex items-center justify-center w-full py-2 border rounded">
          <FcGoogle className="text-red-500 mr-2" /> Continue with Google
        </button>
      </div>
    </div>
  );
}

