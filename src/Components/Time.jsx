import { useState, useEffect } from 'react';

const Time = ({ data, removeCard }) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer <= 0) {
        removeCard(data.createdAt);
      } else {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div
      className="h-32 w-32 flex-col flex justify-center items-center rounded-md"
      style={{
        backgroundColor: data.bgcolor,
        color: data.color,
      }}
    >
      <h1 className="text-5xl">{data.text}</h1>
      <h1 className="text-2xl pt-2">{timer} s</h1>
    </div>
  );
};

export default Time;

