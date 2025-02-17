import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Herosection from "../../Components/Herosection/Herosection";
import Testimonials from "../../Components/Testimonials/Testimonials";
import { ContactForm } from "../../Components/ContactForm/ContactForm";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Herosection></Herosection>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>


        </div>
    );
};

export default Home;