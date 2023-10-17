import React from 'react';

const AnimatedColumns = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-1/3 p-4 transform hover:scale-105 transition duration-300">
        <div className="bg-blue-200 p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Column 1</h2>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      <div className="w-1/3 p-4 transform hover:scale-105 transition duration-300">
        <div className="bg-green-200 p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Column 2</h2>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      <div className="w-1/3 p-4 transform hover:scale-105 transition duration-300">
        <div className="bg-red-200 p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Column 3</h2>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
    </div>
  );
}

export default AnimatedColumns;
