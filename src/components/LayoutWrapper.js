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

  const site = "https://codewave.com"
  const canonicalURL = site + location.pathname

  return (
    <>
      <div style={{ cursor: "none" }}>
        <GatsbySeo
          title={seo?.metaTitle || "Codewave"}
          description={seo?.metaDescription || "Codewave"}
          canonical={canonicalURL}
          noindex={false}
          openGraph={{
            title: "CodeWave",
            description: seo?.metaDescription,
            url: canonicalURL,
            locale: "en_US",
            noindex: seo?.preventIndexing,
            images: [
              {
                url: seo?.metaMedia?.data?.attributes?.url,
                width: 850,
                height: 650,
                alt: "image",
              },
            ],
          }}
        />
        <CursorPointer size={mouseSize} text={mouseText} />
        <Navbar handleMouse={handleMouse} arabic={arabic[1] === "ar"} />
        {children}
      </div>
    </>
  )
}

export default LayoutWrapper
