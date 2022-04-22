import React from "react"
import { ScrollTrigger, Tween } from "react-gsap"

const TextSlider = ({ text }) => {
  return (
    <>
      <div className="about__phrase" style={{ marginTop: "40px" }}>
        <ScrollTrigger start="-400px center" end="3500px" scrub={1}>
          <Tween
            from={{
              x: "00px",
            }}
            to={{
              x: "-3000px",
            }}
          >
            <div>{text}</div>
          </Tween>
        </ScrollTrigger>
      </div>
    </>
  )
}

export default TextSlider
