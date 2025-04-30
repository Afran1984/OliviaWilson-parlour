import useAxiousSecure from './useAxiousSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from "./useAuth"

const useOrderCard = () => {
    const axiousSecure = useAxiousSecure();
    const {user} = useAuth();
    const {refetch, data: card = []} = useQuery({
        queryKey: ['card', user?.email],
        queryFn: async () => {
            const res = await axiousSecure.get( `/userOrder?email=${user.email}`)
            return res.data
        }
    })
    return[card , refetch]

};

export default useOrderCard;