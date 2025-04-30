import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./useAxiousSecure";
import useAuth from "./useAuth";

const useUser = () => {
    // use Ten stack
    const axiousSecure = useAxiousSecure();
    const {user} = useAuth();
    const {data: userp = [] } = useQuery({
        queryKey:['userp', user?.email],
        queryFn: async () => {
            const res = await axiousSecure.get(`/usersInfo?email=${user.email}`)
            return res.data
        }
    })
    return [userp]
};

export default useUser;