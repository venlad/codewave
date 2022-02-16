import { graphql } from "gatsby"
import React, { useState } from "react"
import CursorPointer from "../components/cursor/CursorPointer"
import Navbar from "../components/Navbar"
import PlainFooter from "../components/shared/PlainFooter"

const TermsAndConditions = ({ data }) => {
  const terms = data?.allStrapiTermsandcondition?.edges[0]?.node?.data
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
        <div class="app-container" data-namespace="legal">
          <div class="content-wrapper scrollable">
            <div class="main legal">
              <div class="logo--mobile logo--mobile--black">
                <a href="/" data-section="0" class=" is-current ">
                  <img src="https://res.cloudinary.com/codewave-technologies/image/upload/c_scale,w_140/v1566712787/codewave-logo-2x_tl2pvw.png" />
                </a>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: terms?.attributes?.ternsAndConditions,
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

export default TermsAndConditions

export const query = graphql`
  query termsEn {
    allStrapiTermsandcondition {
      edges {
        node {
          data {
            attributes {
              ternsAndConditions
              localizations {
                data {
                  attributes {
                    ternsAndConditions
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`