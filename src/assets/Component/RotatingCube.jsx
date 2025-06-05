import React, { useEffect, useState } from 'react';
import './Cube.css';

const RotatingCube = ({ images = [] }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotation({
        x: scrollY * 0.4,
        y: scrollY * 0.4,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faceNames = ['front', 'back', 'right', 'left', 'top', 'bottom'];

  return (
    <div className="scene">
      <div
        className="cube"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {faceNames.map((face, i) => (
          <div key={face} className={`face ${face}`}>
            <img src={images[i]} alt={`Cube ${face}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotatingCube;
