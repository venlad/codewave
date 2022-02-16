import React from "react"
import Cursor from "react-cursor-follow"
import "../cursor/cursor.css"

const CursorPointer = ({ text, size = 12, color = "white" }) => {
  return (
    <Cursor duration={0.5} size={size} color={color} className="cursor__new">
      <p
        style={{
          width: "100%",
          height: "100%",
          fontSize: "12px",
          fontWeight: "600",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          padding: 0,
          color: "black",
          letterSpacing: "2px",
        }}
      >
        {text}
      </p>
    </Cursor>
  )
}

export default CursorPointer
