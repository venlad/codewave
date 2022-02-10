import React from "react"
import { ScrollTrigger, Tween } from "react-gsap"

const TextSlider = ({ text }) => {
  return (
    <>
      <div className="about__phrase" style={{ marginTop: "40px" }}>
        <ScrollTrigger start="-400px center" end="1200px" scrub={0.5}>
          <Tween
            from={{
              x: "0px",
            }}
            to={{
              x: "-1800px",
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
