import React from 'react';

const Shimmer = () => {
  return (
    <div className="body-div flex flex-wrap justify-evenly pl-36 pr-36 py-12">
      {Array(8).fill('').map((e, index) => (
        <div key={index} className="shimmer-box m-2 p-2 w-56 h-52 rounded-xl shadow-xl"></div>
      ))}
    </div>
  );
};

export default Shimmer;
