import React, { useState } from "react"
import CursorPointer from "./cursor/CursorPointer"
import Navbar from "./Navbar"
import YouTubeVideo from "./shared/YouTubeVideo"

const LayoutWrapper = ({ children }) => {
  const [mouseSize, setMouseSize] = useState(12)
  const [mouseText, setMouseText] = useState("")

  const [isOpen, setOpen] = useState(false)

  const handleMouse = (size, text) => {
    setMouseSize(size)
    setMouseText(text)
  }

  return (
    <>
      <YouTubeVideo
        isOpen={true}
        close={() => setOpen(false)}
        url={about?.hero?.youtubeUrl}
      />
      <CursorPointer size={mouseSize} text={mouseText} />
      <Navbar handleMouse={handleMouse} />
      {children}
    </>
  )
}

export default LayoutWrapper
