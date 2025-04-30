import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./useAxiousSecure";
import useAuth from "./useAuth";

const useAppoinment = () => {
    const axiousSecure = useAxiousSecure();
    const {user} = useAuth();

    const {refetch, data: appoinment = []} = useQuery({
        queryKey: ['appoinment', user?.email],
        queryFn: async () => {
            const res = await axiousSecure.get(`/apoinment?email=${user.email}`)
            return res.data
        }

    }) 
    return [appoinment,refetch]

}

export default useAppoinment;

// import useAxiousSecure from './useAxiousSecure';
// import { useQuery } from '@tanstack/react-query';
// import useAuth from "./useAuth"

// const useAppoinment = () => {
//     const axiousSecure = useAxiousSecure();
//     const {user} = useAuth();
//     const {refetch, data: appoinment = []} = useQuery({
//         queryKey: ['appoinment', user?.email],
//         queryFn: async () => {
//             const res = await axiousSecure.get( `/apoinment?email=${user.email}`)
//             return res.data
//         }
//     })
//     return[appoinment , refetch]

// };

// export default useAppoinment;