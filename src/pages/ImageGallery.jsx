import Avatar from '../Components/Avatar';

function ImageGallery() {
  const users = [
    {
      img: "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?ga=GA1.1.387070861.1704140009&semt=ais_hybrid",
      username: "star",
      title: "Showes",
      bgColor: "gry",
      textColor: "white",
      price: "$120",
      description: "Stylish trainers for a modern look.",
      reviews: "⭐⭐⭐⭐⭐"
    },
    {
      img: "https://img.freepik.com/free-photo/blue-t-shirt_125540-727.jpg?ga=GA1.1.387070861.1704140009&semt=ais_hybrid",
      username: "star",
      title: "Shart",
      bgColor: "gry", // Consistent background color
      textColor: "white",
      price: "$45",
      description: "Comfortable blue t-shirt for casual wear.",
      reviews: "⭐⭐⭐⭐"
    },
    {
      img: "https://img.freepik.com/free-psd/smartwatch-realistic-isolated-transparent-background_84443-1812.jpg?ga=GA1.1.387070861.1704140009&semt=ais_hybrid",
      username: "star",
      title: "Watch",
      bgColor: "gry", // Consistent background color
      textColor: "white",
      price: "$199",
      description: "High-tech smartwatch with advanced features.",
      reviews: "⭐⭐⭐⭐⭐"
    },
    {
      img: "https://img.freepik.com/premium-psd/blue-suit-with-blue-tie-hanging-hanger_882954-76891.jpg?ga=GA1.1.387070861.1704140009&semt=ais_hybrid",
      username: "star",
      title: "formal dress",
      bgColor: "gry", // Consistent background color
      textColor: "white",
      price: "$299",
      description: "Elegant blue suit for formal occasions.",
      reviews: "⭐⭐⭐⭐⭐"
    },
  ];

  return (
    <div className="bg-gray-800 min-h-screen text-gray-800">

      <div className="bg-gray-800 p-4 flex flex-wrap justify-center">
        {users.map((data, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 m-2 rounded-lg shadow-lg"
            style={{ backgroundColor: data.bgColor }}
          >
            <img src={data.img} alt={data.title} className="w-full h-40 object-cover rounded-md mb-2" />
            <h2 className="text-xl font-bold mb-1" style={{ color: data.textColor }}>
              {data.title}
            </h2>
            <p className="mb-1" style={{ color: data.textColor }}>
              {data.description}
            </p>
            <p className="mb-2" style={{ color: data.textColor }}>
              Price: {data.price}
            </p>
            <p className="mb-2" style={{ color: data.textColor }}>
              Reviews: {data.reviews}
            </p>
            <button
              className="bg-gray-500 text-white py-1 px-4 rounded hover:text-gray-900 hover:bg-gray-300"
              onClick={() => console.log(data)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
