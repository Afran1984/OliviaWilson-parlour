import axios from "axios";

export const axiousSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiousSecure = () => {
    return axiousSecure;
};

export default useAxiousSecure;