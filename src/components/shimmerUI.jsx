import React from 'react';
import ContentLoader from 'react-content-loader';

const ShimmerLoader = () => (
  <div className='flex sm:flex-wrap ml-6'> 
    
      
      {
        Array(40).fill("").map((e, index) => (
          <div className='w-60 h-64 p-4 m-3 shadow-xg rounded-md bg-pink-50 flex' key={index}></div>
        ))
      } 
     
      </div>
);

export default ShimmerLoader;
