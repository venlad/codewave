import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Reveal, Tween } from "react-gsap"
import styled from "styled-components"

const GatsbyImageReveal = ({ src }) => {
  console.log(src, "JAFFA")
  return (
    <>
      <Wrapper>
        <Reveal threshold={0.25}>
          <Tween
            from={{ height: "100%", width: "100%" }}
            to={{ height: "0%" }}
            duration={0.6}
          >
            <Mask />
          </Tween>
        </Reveal>
        {/* <GatsbyImage
          image={getImage(src?.publicURL)}
          alt=""
          objectFit="cover"
          style={{ zIndex: 3 }}
        /> */}
        <img
          src={src?.publicURL}
          alt=""
          style={{ zIndex: 3, objectFit: "cover" }}
        />
      </Wrapper>
    </>
  )
}

export default GatsbyImageReveal

const Div = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
`
const Mask = styled.div`
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  transition-duration: 0.5s;
  top: 0;
  background: white;
  z-index: 99;
`
