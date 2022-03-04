import { graphql } from "gatsby"
import React, { useState } from "react"
import LayoutWrapper from "../components/LayoutWrapper"
import PlainFooter from "../components/shared/PlainFooter"

const TermsAndConditions = ({ data, location }) => {
  const terms = data?.allStrapiTermsandcondition?.edges[0]?.node?.data
  const [mouseSize, setMouseSize] = useState(12)
  const [mouseText, setMouseText] = useState("")

  const handleMouse = (size, text) => {
    setMouseSize(size)
    setMouseText(text)
  }

  return (
    <LayoutWrapper
      mouseSize={mouseSize}
      mouseText={mouseText}
      handleMouse={handleMouse}
      location={location}
      seo={terms?.seo}
    >
      <div id="app">
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
    </LayoutWrapper>
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
              seo {
                metaDescription
                metaTitle
                preventIndexing
                metaMedia {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
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
