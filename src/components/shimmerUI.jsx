import React from 'react';
import ContentLoader from 'react-content-loader';

const ShimmerLoader = () => (
  <div className='restaurant-list'> 
    
      
      {
        Array(20).fill("").map((e, index) => (
          <div className='shimmer-card' key={index}></div>
        ))
      } 
     
      </div>
);

export default ShimmerLoader;
