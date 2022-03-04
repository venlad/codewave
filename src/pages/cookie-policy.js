import { graphql } from "gatsby"
import React, { useState } from "react"
import LayoutWrapper from "../components/LayoutWrapper"
import PlainFooter from "../components/shared/PlainFooter"

const CookiePolicy = ({ data, location }) => {
  const policy = data?.allStrapiCookiepolicy?.edges[0]?.node?.data

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
      seo={policy?.seo}
    >
      <div id="app">
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
    </LayoutWrapper>
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
