import logo from "../../../assets/logo/logo.png";
import { Link } from 'react-router-dom';
import moment from 'moment';

const Footer = () => {
   return (
      <footer className="  bg-red-200 ">
         <div className='footer p-10 text-base-content max-w-7xl mx-auto'>
            <div>
               <Link to="/">
                  <img className='w-20 h-20' src={logo} alt="" />
               </Link>
               <div className="container mx-auto text-start">
                  <p className="text-gray-800">Raosu Summer Photography <br /> Camp School &copy; <span>
                     {moment().format("MMMM, YYYY")}
                  </span>. All rights reserved.</p>
               </div>
            </div>
            <div>
               <span className="text-md font-bold">Services</span>
               <Link to="/" className="link link-hover">Spring</Link>
               <Link to="/" className="link link-hover">Autumn</Link>
               <Link to="/" className="link link-hover">Advertisement</Link>
            </div>
            <div>
               <span className="text-md font-bold">Institute</span>
               <Link to="/about-us" className="link link-hover">About us</Link>
               <Link to="/" className="link link-hover">Home</Link>
               <Link to="/contact" className="link link-hover">Contact</Link>
            </div>
            <div>
               <span className="text-md font-bold">Legal Info</span>
               <Link to="/terms" className="link link-hover">Terms & Conditions</Link>
               <Link to="/privacy" className="link link-hover">Privacy policy</Link>
               <Link to="/cookie" className="link link-hover">Cookie policy</Link>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
