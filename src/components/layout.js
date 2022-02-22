import React from "react"
import Navbar from "./Navbar"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
