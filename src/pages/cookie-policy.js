import { graphql } from "gatsby"
import React, { useState } from "react"
import CursorPointer from "../components/cursor/CursorPointer"
import Navbar from "../components/Navbar"
import PlainFooter from "../components/shared/PlainFooter"

const CookiePolicy = ({ data }) => {
  const policy = data?.allStrapiCookiepolicy?.edges[0]?.node?.data

  const [mouseSize, setMouseSize] = useState(12)
  const [mouseText, setMouseText] = useState("")

  const handleMouse = (size, text) => {
    setMouseSize(size)
    setMouseText(text)
  }

  return (
    <>
      <CursorPointer size={mouseSize} text={mouseText} />
      <Navbar handleMouse={handleMouse} />
      <div id="app" style={{ cursor: "none" }}>
        <div className="app-container" data-namespace="legal">
          <div className="content-wrapper scrollable">
            <div className="main legal">
              <div className="logo--mobile ">
                <a href="/" data-section="0" className=" is-current ">
                  <img src="https://res.cloudinary.com/codewave-technologies/image/upload/c_scale,w_140/v1566712787/codewave-logo-2x_tl2pvw.png" />
                </a>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: policy?.attributes?.cookiePolicy,
                }}
              />
              <PlainFooter handleMouse={handleMouse} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CookiePolicy

export const query = graphql`
  query cookieEn {
    allStrapiCookiepolicy {
      edges {
        node {
          data {
            attributes {
              localizations {
                data {
                  attributes {
                    cookiePolicy
                  }
                }
              }
              cookiePolicy
            }
          }
        }
      }
    }
  }
`
