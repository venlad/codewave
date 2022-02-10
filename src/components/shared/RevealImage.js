import React, { Children } from "react"
import { Reveal, Tween } from "react-gsap"
import styled from "styled-components"

const RevealImage = ({ children, image }) => {
  return (
    <>
      <Wrapper>
        {/* <Image
          className="lazyload"
          src="https://codewave.gumlet.io/image/upload/q_auto:good/v1563726955/codewave-a-design-thinking-digital-transformation-company.jpg?w=600"
        /> */}
        <ImgWrapper>{children}</ImgWrapper>
        <Reveal trigger={<div />}>
          <Tween from={{ height: "600px" }} to={{ height: "0px" }} duration={1}>
            <Mask />
          </Tween>
        </Reveal>
      </Wrapper>
    </>
  )
}

export default RevealImage

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`

const Mask = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
`

const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  objectfit: contain;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    objectfit: contain;
  }
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 400px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
`
