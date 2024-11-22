import React from "react";

const about = () => {
  return (
    <div className="about-container bg-gradient-to-br from-yellow-100 via-red-50 to-orange-100 p-10 min-h-screen">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-orange-600 mb-4">🍴 About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold text-red-600">OrderEats</span>, we believe that every meal should be a celebration! 🌟  
          Whether you're craving a spicy Indian curry, a cheesy Italian pizza, or a delightful dessert, we’ve got you covered.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Our mission is simple: *To bring happiness to your plate!* 🥗🍕  
          From the freshest ingredients to seamless online ordering, we deliver your favorite dishes straight to your doorstep, hot and ready to enjoy.  
          Because life’s too short for bad food!  
        </p>
      </div>

      <div className="features-section mt-10">
        <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">
          Why Choose Us? 🤔
        </h2>
        <ul className="list-none space-y-4 max-w-4xl mx-auto">
          <li className="flex items-center">
            <span className="text-2xl text-orange-600 mr-2">🍔</span>
            <p className="text-lg text-gray-700">
              **A World of Cuisines** - Explore dishes from around the globe at the click of a button.
            </p>
          </li>
          <li className="flex items-center">
            <span className="text-2xl text-orange-600 mr-2">⚡</span>
            <p className="text-lg text-gray-700">
              **Lightning-Fast Delivery** - Your food, delivered piping hot, right when you need it.
            </p>
          </li>
          <li className="flex items-center">
            <span className="text-2xl text-orange-600 mr-2">💳</span>
            <p className="text-lg text-gray-700">
              **Secure Payments** - Multiple payment options with the highest security standards.
            </p>
          </li>
          <li className="flex items-center">
            <span className="text-2xl text-orange-600 mr-2">🌟</span>
            <p className="text-lg text-gray-700">
              **Customer Love** - Thousands of happy foodies trust us for their cravings.
            </p>
          </li>
        </ul>
      </div>

      <div className="team-section mt-12 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">
          Meet Our Team 👩‍🍳👨‍💻
        </h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Behind every delicious delivery is a passionate team of food lovers, tech enthusiasts, and customer service champions, working together to make your experience amazing!
        </p>
        <div className="team-images flex justify-center gap-8 mt-6">
          {/* Example placeholder images */}
          <img
            className="w-24 h-24 rounded-full border-2 border-orange-500"
            src="https://via.placeholder.com/100"
            alt="Team Member 1"
          />
          <img
            className="w-24 h-24 rounded-full border-2 border-orange-500"
            src="https://via.placeholder.com/100"
            alt="Team Member 2"
          />
          <img
            className="w-24 h-24 rounded-full border-2 border-orange-500"
            src="https://via.placeholder.com/100"
            alt="Team Member 3"
          />
        </div>
      </div>
        
    </div>
  );
};

export default about;
