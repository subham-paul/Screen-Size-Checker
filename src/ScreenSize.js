import React, { useEffect, useState } from 'react';

const ScreenSize = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setScreenSize(`${width}px x ${height}px`);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r 
                  from-green-500 to-orange-400 ">
      <div className="bg-gray-200 p-4 rounded-md shadow">
        <h1 className="text-2xl font-semibold">Current Screen Size:</h1>
        <p className="text-xl mt-2 flex justify-center">{screenSize}</p>
      </div>
    </div>
  );
};

export default ScreenSize;
