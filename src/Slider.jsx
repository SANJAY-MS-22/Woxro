import React from 'react';
import RotatingCube from './assets/Component/RotatingCube';
import Landing from './assets/Component/Landing';

const cubeImages = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
];

function Slider() {
  return (
    <>
    {/* <div style={{ height: '200vh'}}>
      <RotatingCube images={cubeImages} />
    </div> */}
    <div>
      <Landing/>
    </div>
    </>
  );
}

export default Slider;
