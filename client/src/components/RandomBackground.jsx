// src/components/RandomBackground.js
import React, { useEffect, useState } from "react";
import "../styles/RandomBackground.css";
import backgroundTriangle from "../images/background-triangle.png";
import backgroundCircle from "../images/background-circle.png";
import backgroundSquare from "../images/background-square.png";
import backgroundCircle1 from "../images/background-circle1.png";
import backgroundSquare1 from "../images/background-square1.png";
import backgroundTriangle1 from "../images/background-triangle1.png";
import backgroundCircle2 from "../images/background-circle2.png";
import backgroundSquare2 from "../images/background-square2.png";
import backgroundTriangle2 from "../images/background-triangle2.png";

const images = [
  backgroundCircle,
  backgroundSquare,
  backgroundTriangle,
  backgroundCircle1,
  backgroundSquare1,
  backgroundTriangle1,
  backgroundCircle2,
  backgroundSquare2,
  backgroundTriangle2,
];

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
