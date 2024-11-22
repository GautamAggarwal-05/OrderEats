import React from "react";

const Contact = () => {
  return (
    <div className="contact-container bg-gradient-to-b from-orange-50 via-yellow-100 to-red-50 p-10 min-h-screen">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-orange-600 mb-6">📞 Get In Touch</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Have questions, feedback, or just want to say hi? We'd love to hear from you!  
          Our team is here to help you every step of the way. Reach out via the form below, or connect with us directly.
        </p>

        {/* Contact Form */}
        <div className="form-container bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                id="message"
                rows="4"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-bold py-3 rounded-md hover:bg-orange-600 transition-all"
            >
              Send Message 🚀
            </button>
          </form>
        </div>

        {/* Additional Contact Information */}
        <div className="additional-info mt-10 text-gray-700">
          <p className="text-lg">
            Or email us directly at{" "}
            <span className="font-semibold text-red-600">
              aggarwalgautam06@gmail.com
            </span>
            .
          </p>
          <p className="text-lg">
            Call us at{" "}
            <span className="font-semibold text-red-600">1-800-YUM-FOOD</span>.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="social-media mt-10">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Follow Us 🌟
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-orange-600 hover:text-orange-700 text-3xl"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-orange-600 hover:text-orange-700 text-3xl"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-orange-600 hover:text-orange-700 text-3xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
