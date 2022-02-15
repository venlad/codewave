import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

const RevealImage = ({ children }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.25,
    delay: 500,
    triggerOnce: true,
  })

  // const [click, setClick] = useState(false)

  // useEffect(() => {
  //   if (inView) {
  //     setClick(true)
  //   }
  // }, [])

  // console.log(click, "JAFFA")

  return (
    <Wrapper>
      <Mask ref={ref} click={inView} />
      {children}
    </Wrapper>
  )
}

export default RevealImage

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`
const Mask = styled.div`
  content: "";
  position: absolute;
  width: 100%;
  height: ${props => (props.click ? `0%` : `100%`)};
  transition-duration: 1s;
  top: 0;
  background: white;
`
