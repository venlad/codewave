import React, { useEffect } from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"

const YouTubeVideo = ({
  isOpen,
  close,
  url = "https://www.youtube.com/watch?v=J55SgQLOrkU",
}) => {
  return (
    <>
      {isOpen && (
        <Wrapper>
          <VideoWrapper>
            <Button onClick={close}>X</Button>
            <ReactPlayer url={url} controls={true} />
          </VideoWrapper>
        </Wrapper>
      )}
    </>
  )
}

export default YouTubeVideo

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 999;
`

const VideoWrapper = styled.div`
  position: fixed;
  top: calc(50vh - 175px);
  left: calc(50vw - 360px);
  background-color: #00000087;
`
const Button = styled.button`
  position: absolute;
  top: -25px;
  right: -25px;
  padding: 5px 8px;
  font-size: 16px;
  font-weight: 300;
  border-radius: 50%;
  border: 0;
  background-color: black;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: red;
  }
`
