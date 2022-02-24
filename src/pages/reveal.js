import { graphql, Link } from "gatsby"
import React, { useEffect, useState } from "react"
import FooterAboveText from "../components/shared/FooterAboveText"
import YoutubeHero from "../components/shared/YoutubeHero"
import TextSlider from "../components/TextSlider"
import Navbar from "../components/Navbar"
import CursorPointer from "../components/cursor/CursorPointer"
import RevealImage from "../components/shared/RevealImage"
import Aos from "aos"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Reveal, Tween } from "react-gsap"
import styled from "styled-components"
import GatsbyImageReveal from "../components/shared/GatsbyImageReveal"

const GrowingLeader = ({ data }) => {
  const growingLeader =
    data?.allStrapiGrowingLeader?.edges[0]?.node?.data?.attributes

  const [mouseSize, setMouseSize] = useState(12)
  const [mouseText, setMouseText] = useState("")

  const handleMouse = (size, text) => {
    setMouseSize(size)
    setMouseText(text)
  }

  useEffect(() => {
    Aos.init({
      once: true,
      anchorPlacement: "center-center",
      easing: "ease-in-out",
      delay: 100,
    })
  }, [])

  return (
    <>
      <Div>
        {/* <Wrapper>
          <Reveal>
            <Tween
              from={{ height: "100%", width: "100%" }}
              to={{ height: "0%" }}
              duration={5}
            >
              <Mask />
            </Tween>
          </Reveal>
          <GatsbyImage
            image={getImage()}
            alt=""
            objectFit="contain"
            style={{ zIndex: 3 }}
          />
        </Wrapper> */}
        <GatsbyImageReveal
          src={growingLeader?.leaderBanner?.data?.attributes?.localFile}
        />
      </Div>
    </>
  )
}

export default GrowingLeader

const Div = styled.div`
  width: 720px;
  height: 480px;
  position: relative;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
`
const Mask = styled.div`
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  transition-duration: 1s;
  top: 0;
  background: blue;
  z-index: 99;
`

export const query = graphql`
  query reveal {
    allStrapiGrowingLeader {
      edges {
        node {
          data {
            attributes {
              hero {
                heading
                preHeading
                subHeading
                youtubeUrl
                youtubeThumbnail {
                  data {
                    attributes {
                      url
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            formats: WEBP
                          )
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  }
                }
              }
              growLeaderSection {
                btnLink1
                btnLink2
                btnText1
                btnText2
                description
                heading
                preHeading
                image {
                  data {
                    attributes {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            formats: WEBP
                          )
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  }
                }
              }
              leaderBanner {
                data {
                  attributes {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          layout: FULL_WIDTH
                          placeholder: BLURRED
                          formats: WEBP
                        )
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
              leaderPoints {
                heading
                description
              }
            }
          }
        }
      }
    }
  }
`
