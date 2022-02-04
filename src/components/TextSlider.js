import React from "react";

const TextSlider = ({ text }) => {
  return (
    <>
      <div className="about__phrase" style={{ marginTop: "40px" }}>
        <div>{text}</div>
      </div>
    </>
  );
};

export default TextSlider;
