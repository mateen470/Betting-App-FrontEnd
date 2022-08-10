import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "40px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "107%",
  transform: "translate(0, -50%)",
  right: "32px",
  zIndex: 1,
  cursor: "pointer",
  fontSize: "60px",
  color: "black",
};

const leftArrowStyles = {
  position: "absolute",
  top: "106%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "60px",
  color: "black",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  color: "black",
  fontSize: "20px",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          🠔
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          🠖
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}> ● ● </div>
    </div>
  );
};

export default ImageSlider;
