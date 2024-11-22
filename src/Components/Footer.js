import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-[#E8E4C9] text-gray-800 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Name */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-orange-500">orderEats</h1>
            <p className="text-sm">Serving happiness, one order at a time!</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-orange-500 transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-orange-500 transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-orange-500 transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>

        <hr className="my-4 border-gray-300" />

        {/* Copyright */}
        <div className="flex flex-wrap justify-between items-center text-sm">
          <p className="text-gray-600">© 2024 orderEats. All rights reserved.</p>
          <p className="text-gray-600">
            Designed with ❤️ by <span className="font-semibold">ReactJS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
