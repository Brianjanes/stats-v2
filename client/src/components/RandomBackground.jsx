// src/components/RandomBackground.js
import React, { useEffect, useState } from "react";
import "../styles/RandomBackground.css";
import backgroundTriangle from "../images/background-triangle.png";
import backgroundCircle from "../images/background-circle.png";
import backgroundSquare from "../images/background-square.png";

const images = Array.from({ length: 20 }, (_, index) => {
  const shapeIndex = index % 3;
  switch (shapeIndex) {
    case 0:
      return backgroundCircle;
    case 1:
      return backgroundSquare;
    case 2:
      return backgroundTriangle;
    default:
      return null;
  }
});

const getRandomPosition = () => {
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  return { x, y };
};

const RandomBackground = ({ children }) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const newPositions = images.map(() => getRandomPosition());
    setPositions(newPositions);
  }, []);

  return (
    <div className="random-background">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="background decoration"
          style={{
            position: "absolute",
            top: `${positions[index]?.y}%`,
            left: `${positions[index]?.x}%`,
            transform: "translate(-50%, -50%)",
            zIndex: -1,
          }}
        />
      ))}
      <div className="content">{children}</div>
    </div>
  );
};

export default RandomBackground;
