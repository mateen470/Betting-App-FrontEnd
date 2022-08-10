import React from "react";
import "./Crousal.css";
import ImageSlider from "./ImageSlider";

const Crousal = () => {
  const slides = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScmKzCEOrKA9qS0XerMtSPA2P3PWKfjV65KQ&usqp=CAU",
    },
    {
      url: "https://w0.peakpx.com/wallpaper/116/459/HD-wallpaper-microchip-neon-lines-black-background-chips-technology-backgrounds.jpg",
    },
  ];
  return (
    <div className="crousal_main_div">
      <div className="crousal_main">
        <div className="biggest_div_no3">
          <div className="containerStyles">
            <ImageSlider slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crousal;
