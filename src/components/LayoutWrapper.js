import React from "react"
import CursorPointer from "./cursor/CursorPointer"
import Navbar from "./Navbar"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const LayoutWrapper = ({
  children,
  seo,
  mouseSize,
  mouseText,
  handleMouse,
  location,
}) => {
  const arabic = location.pathname.split("/")

  return (
    <div style={{ cursor: "none" }}>
      <GatsbySeo
        title="Simple Usage Example"
        description="A short description goes here."
      />
      <CursorPointer size={mouseSize} text={mouseText} />
      <Navbar handleMouse={handleMouse} arabic={arabic[1] === "ar"} />
      {children}
    </div>
  )
}

export default LayoutWrapper
