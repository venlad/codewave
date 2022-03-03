import { graphql } from "gatsby"
import React, { useState } from "react"
import LayoutWrapper from "../components/LayoutWrapper"
import PlainFooter from "../components/shared/PlainFooter"

const PrivacyPolicy = ({ data, location }) => {
  const policy = data?.allStrapiPrivacypolicy?.edges[0]?.node?.data
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
    >
      <div id="app">
        <div class="app-container" data-namespace="legal">
          <div class="content-wrapper scrollable">
            <div class="main legal">
              <div class="logo--mobile ">
                <a href="index.html" data-section="0" class=" is-current ">
                  <img src="https://res.cloudinary.com/codewave-technologies/image/upload/c_scale,w_140/v1566712787/codewave-logo-2x_tl2pvw.png" />
                </a>
              </div>

              <div
                dangerouslySetInnerHTML={{
                  __html: policy?.attributes?.privacyPolicy,
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

export default PrivacyPolicy

export const query = graphql`
  query privacyEn {
    allStrapiPrivacypolicy {
      edges {
        node {
          data {
            attributes {
              privacyPolicy
              localizations {
                data {
                  attributes {
                    privacyPolicy
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
