import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PraivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);

    if (loading) {
        return (
          <div className='min-h-screen bg-white flex justify-center items-center'>
            <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800'></div>
            <p className='ml-4 text-purple-800'>Loading...</p>
          </div>
        );
    }

    if(user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
};

export default PraivateRoute;