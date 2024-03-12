import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[] bg-white w-full py-20">
      <div className="animate-spin rounded-full border-t-4 border-yellow-400 border-opacity-25 border-solid h-16 w-16"></div>
    </div>
  );
};

export default Loader;