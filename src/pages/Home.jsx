import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col">
      {/* Hero Section */}
      <header className="flex-grow flex items-center justify-center py-16">
        <div className="relative w-full max-w-7xl px-10 py-20 text-center bg-gray-900 bg-opacity-80 rounded-lg shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 mb-8">
            Transform the Future with Innovation
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge products designed to optimize your business and personal life. Unleash your potential with our powerful tools and solutions tailored to help you grow.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/BuyProduct" className="transition-transform transform hover:scale-105 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg">
              Our Products
            </Link>
            <Link to="/LearnMore" className="transition-transform transform hover:scale-105 px-10 py-4 bg-transparent border-2 border-blue-600 hover:border-blue-700 text-blue-600 hover:text-blue-700 font-semibold rounded-full shadow-lg">
              Learn More
            </Link>
          </div>

          {/* Decorative Product Icons */}
          <div className="absolute top-0 right-0 p-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Cutting-edge tech"
              className="w-14 h-14 md:w-20 md:h-20"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png"
              alt="Innovation"
              className="w-14 h-14 md:w-20 md:h-20"
            />
          </div>
        </div>
      </header>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Us */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
              <p className="text-gray-400">
                We are committed to delivering innovative products that enhance productivity and elevate your business to new heights. With a focus on quality and customer satisfaction, we help you thrive in a competitive world.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Useful Links</h3>
              <ul className="text-gray-400 space-y-3">
                <li><Link to="/BuyProduct" className="hover:text-white transition">Buy Product</Link></li>
                <li><Link to="/Profile" className="hover:text-white transition">Profile</Link></li>
                <li><Link to="/Weather" className="hover:text-white transition">Weather</Link></li>
                <li><Link to="/box" className="hover:text-white transition">Box</Link></li>
              </ul>
            </div>

            {/* Form Section */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  type="text"
                  placeholder="Last name"
                  {...register("lastName", { required: true, maxLength: 100 })}
                  className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                {errors.lastName && <p className="text-red-500">Last name is required</p>}

                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500">Valid email is required</p>}

                <input
                  type="tel"
                  placeholder="Mobile number"
                  {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })}
                  className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                {errors.mobileNumber && <p className="text-red-500">Mobile number must be between 6 and 12 digits</p>}

                <select
                  {...register("title", { required: true })}
                  className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>

                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input {...register("developer", { required: true })} type="radio" value="Yes" className="mr-2" />
                    Developer: Yes
                  </label>
                  <label className="flex items-center">
                    <input {...register("developer", { required: true })} type="radio" value="No" className="mr-2" />
                    Developer: No
                  </label>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} ACME Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
