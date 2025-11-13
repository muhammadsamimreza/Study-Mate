import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "/logo.png"
import { Link } from "react-router";
import Container from "../Container/Container";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-gray-800 dark:text-white/70 py-10 px-6  shadow-inner">
      <Container>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center md:text-left">
          <div>
            <Link to="/" className="flex gap-3 md:gap-5 justify-center md:justify-start items-center font-bold text-amber-500 mb-3">
             <img className="w-7 md:w-10" src={logo} alt="" /> <span className="text-xl md:text-3xl">STUDY MATE</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed">
              Your smart study companion — helping you stay organized,
              motivated, and connected while learning.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-700 dark:text-white/80">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-700 dark:text-white/80">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start gap-5 text-amber-500 text-2xl">
              <a href="#">
                <FaFacebookF className="hover:scale-110 transition-transform" />
              </a>
              <a href="#">
                <FaXTwitter className="hover:scale-110 transition-transform" />
              </a>
              <a href="#">
                <FaInstagram className="hover:scale-110 transition-transform" />
              </a>
              <a href="#">
                <FaYoutube className="hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} STUDY MATE. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
