import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
           <footer className="footer bg-[#F63E7B] text-[#FFFFFF] p-10">
  <aside>
        <div className="flex gap-2 items-start">
            <MdLocationPin className="w-6 h-6" /> {/* Adjust size here */}
            <p>
                Olivia Wilson parlour Ltd.
                <br />
                Mozaffer Nagor Residential Area,
                <br />
                Professor Building 3rd floor
            </p>
        </div>
        <div className="flex gap-2 items-start mt-2">
            <IoMailOpenOutline className="w-5 h-4" /> {/* Adjust size here */}
            <a className="hover:underline" href="mailto:afranrazzak1984@gmail.com">afranrazzak1984@gmail.com</a>
        </div>

        <div className="flex gap-2 items-start mt-2">
            <FaPhoneAlt className="w-5 h-4" /> {/* Adjust size here */}
            <a className="hover:underline" href="tel:+8801717663447">+8801717663447</a>
        </div>
        
    
  </aside>
  <nav>
    <h6 className="footer-title">COMPANY</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Project</a>
    <a className="link link-hover">Our Team</a>
    <a className="link link-hover">Submit Listing</a>
  </nav>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover">Rentals</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Sales</a>
    <a className="link link-hover">Our Blog</a>
  </nav>
  <nav className="items-end">
    <h6 className="footer-title">About Us</h6>
    <p>
        Lorem ipsum dolor sit amet, consectetur
        <br />
        adipiscing elit. Purus commodo ipsum
        <br />
        duis laoreet maecenas. Feugiat 
    </p>
    <div className="flex gap-3">
        <a target="newtab" href="https://www.facebook.com/profile.php?id=100056553463906"><IoLogoFacebook className="h-6 w-6"/></a>
        <a target="newtab" href="https://www.instagram.com/?hl=en"><FaInstagram className="h-6 w-6"/></a>
        <a target="newtab" href="https://www.linkedin.com/in/abdur-razzak-jim/"><FaLinkedin className="h-6 w-6"/></a>
        <a target="newtab" href="https://www.youtube.com/@3-HOME-7"><FaYoutube className="h-6 w-6"/></a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;