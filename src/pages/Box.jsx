import { useEffect, useState } from 'react';
import Button from '../Components/Button';
import Time from '../Components/Time';

const Box = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#000000");
  const [bgcolor, setBgcolor] = useState("#ffffff");
  const [data, setData] = useState([]);

  const addData = () => {
    if (text.trim() !== "") {
      const obj = {
        text: text,
        color: color,
        bgcolor: bgcolor,
        createdAt: Date.now(),
      };
      setData([...data, obj]);
      setText(""); // Clear the input field after adding
    }
  };

  const onRemove = (createdAt) => {
    setData(data.filter((item) => item.createdAt !== createdAt));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addData();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Customize Your Box</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-3">Enter Text</label>
            <input
              value={text}
              type="text"
              onChange={(e) => setText(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-gray-900 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type something..."
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-3">Text Color</label>
            <input
              value={color}
              type="color"
              onChange={(e) => setColor(e.target.value)}
              className="w-full h-12 border border-gray-600 rounded-lg cursor-pointer"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-3">Background Color</label>
            <input
              value={bgcolor}
              type="color"
              onChange={(e) => setBgcolor(e.target.value)}
              className="w-full h-12 border border-gray-600 rounded-lg cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            bgcolor="gray"
            content="Add"
            onclick={addData}
            className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
  {data.map((item) => (
    <Time
      key={item.createdAt}
      data={item}
      removeCard={onRemove}
      className="transform hover:scale-105 transition-transform duration-300 ease-in-out"
    />
     ))}
     </div>

    </div>
  );
};

export default Box;