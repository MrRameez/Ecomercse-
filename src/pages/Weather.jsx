import { useState } from "react";

function Weather() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getWeatherByCity = () => {
    if (!city.trim()) {
      // If city input is empty, show a warning
      Swal.fire({
        title: "Enter the location",
        text: "Please enter a location.",
        icon: "warning",
        background: "#1e1e2d", // Dark theme background
        color: "#fff", // Text color
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f136667cfcdb418bf8b7a4c5a542f00`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.cod === 200) {
          // Success: weather data found
          setCurrentWeather(res);
          setIcon(res.weather[0].icon);
          setCity(""); // Clear input after successful fetch
        } else {
          // If city is not found, show the "City not found" message
          Swal.fire({
            title: "City not found",
            text: "Please enter a valid location.",
            icon: "error",
            background: "#1e1e2d", // Dark theme background
            color: "#fff", // Text color
            confirmButtonColor: "#3085d6",
          });
        }
      })
      .catch(() => {
        // Handle errors like network issues
        Swal.fire({
          title: "Error",
          text: "Unable to fetch weather data.",
          icon: "error",
          background: "#1e1e2d",
          color: "#fff",
          confirmButtonColor: "#3085d6",
        });
      })
      .finally(() => setIsLoading(false));
  };

  const temp = currentWeather ? Math.round(currentWeather.main.temp - 273.15) : "";
  const feelsLike = currentWeather ? Math.round(currentWeather.main.feels_like - 273.15) : "";
  const weatherCondition = currentWeather?.weather[0]?.main;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#1e1e2d] text-white py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Weather App</h1>

      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-500 bg-[#2c2c3e] text-white rounded-lg px-4 py-2 mr-2"
        />
        <button
          onClick={getWeatherByCity}
          className="bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition"
        >
          Get Weather
        </button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : currentWeather ? (
        <div className="bg-[#2c2c3e] bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg p-6 w-full max-w-xs">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Temperature</h2>
            <h2 className="text-xl">{temp}°C</h2>
          </div>
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Feels Like</h2>
            <h2 className="text-xl">{feelsLike}°C</h2>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Weather</h2>
            <img src={iconUrl} alt={weatherCondition} className="w-12 h-12" />
          </div>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
}

export default Weather;
