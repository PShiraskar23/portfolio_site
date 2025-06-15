import React, { useState, useEffect } from "react";
import "./style.css";

const TextAnimation = ({ texts }) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [isTextChanging, setIsTextChanging] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timer = setTimeout(() => {
      if (!isTextChanging) {
        if (!isErasing) {
          if (currentIndex < currentText.length) {
            setDisplayText((prevText) => prevText + currentText[currentIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          } else {
            setIsErasing(true);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText((prevText) => prevText.slice(0, -1));
          } else {
            setIsErasing(false);
            setCurrentIndex(0);
            setIsTextChanging(true);
          }
        }
      } else {
        if (textIndex < texts.length - 1) {
          setTextIndex((prevIndex) => prevIndex + 1);
          setIsTextChanging(false);
        } else {
          setTextIndex(0);
          setIsTextChanging(false);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isErasing, isTextChanging, textIndex, texts]);

  return (
    <span className="text_animate">
      <span>I Am </span> {displayText}
    </span>
  );
};

export default TextAnimation;
