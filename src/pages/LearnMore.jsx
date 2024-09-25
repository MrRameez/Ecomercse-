import React from 'react';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <header className="text-center mb-20">
          <h1 className="text-5xl font-extrabold tracking-tight text-white mb-8">
            Discover Our Exclusive Collections
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Step into the world of elegance and cutting-edge technology. Explore the best in fashion, luxury jewelry, and state-of-the-art electronics.
          </p>
        </header>

        {/* Ladies' Clothing */}
        <section className="mb-20 relative group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-4 transition-all group-hover:text-pink-500">
                Ladies' Clothing
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Discover the perfect blend of elegance and comfort with our exclusive ladies' fashion collection. From evening gowns to casual wear, our premium fabrics and modern designs ensure you stay stylish and comfortable no matter the occasion.
              </p>
              <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-105">
                Shop Now
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
                alt="Ladies Clothing"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 max-w-full h-auto"
                style={{ maxHeight: '400px' }}  
              />
            </div>
          </div>
        </section>

        {/* Men's Clothing */}
        <section className="mb-20 relative group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-1">
              <h2 className="text-4xl font-bold mb-4 transition-all group-hover:text-blue-500">
                Men's Clothing
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Our men's collection offers premium suits, casual wear, and athletic apparel designed for the modern man. Engineered for comfort and crafted for style, our garments keep you looking sharp, whether at work or play.
              </p>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-105">
                Discover More
              </button>
            </div>
            <div className="order-2">
              <img
                src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                alt="Men's Clothing"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 max-w-full h-auto"
                style={{ maxHeight: '400px' }}  
              />
            </div>
          </div>
        </section>

        {/* Jewelry */}
        <section className="mb-20 relative group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-4 transition-all group-hover:text-yellow-500">
                Luxury Jewelry
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Adorn yourself with our finely crafted jewelry. From sparkling diamonds to intricately designed gold pieces, our collection offers timeless beauty and elegance for every occasion.
              </p>
              <button className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-105">
                View Collection
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
                alt="Jewelry"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 max-w-full h-auto"
                style={{ maxHeight: '400px' }}  
              />
            </div>
          </div>
        </section>

        {/* Electronics */}
        <section className="relative group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-1">
              <h2 className="text-4xl font-bold mb-4 transition-all group-hover:text-green-500">
                LED
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Stay ahead of the curve with our latest electronics. From sleek LED to high-performance LED, our products are designed to keep you connected and productive.
              </p>
              <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-105">
                Explore Now
              </button>
            </div>
            <div className="order-2">
              <img
                src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                alt="Electronics"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 max-w-full h-auto"
                style={{ maxHeight: '400px' }}  
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default LearnMore;
