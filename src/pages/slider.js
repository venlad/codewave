import React from "react"
import { ScrollTrigger, Tween } from "react-gsap"
import TextSlider from "../components/TextSlider"

const slider = () => {
  return (
    <div className="about__phrase" style={{ marginTop: "40px" }}>
      <ScrollTrigger start="-200px center" end="0px center" scrub={0.5} markers>
        <Tween
          from={{
            x: "700px",
          }}
          to={{
            x: "-300px",
          }}
          duration={1}
        >
          <div>
            IoT - Digital Transformation - Design Thinking - Architecture
          </div>
        </Tween>
      </ScrollTrigger>
    </div>
  )
}

export default slider
