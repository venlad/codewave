import React from "react"
import { ScrollTrigger, Tween } from "react-gsap"

const TextSlider = ({ text }) => {
  return (
    <>
      <div className="about__phrase" style={{ marginTop: "40px" }}>
        <ScrollTrigger start="-200px center" end="400px center" scrub={0.5}>
          <Tween
            from={{
              x: "0px",
            }}
            to={{
              x: "-600px",
            }}
            duration={1}
          >
            <div>{text}</div>
          </Tween>
        </ScrollTrigger>
      </div>
    </>
  )
}

export default TextSlider
