import { graphql, Link } from "gatsby"
import React, { useEffect, useState } from "react"
import FooterAboveText from "../components/shared/FooterAboveText"
import YoutubeHero from "../components/shared/YoutubeHero"
import TextSlider from "../components/TextSlider"
import Navbar from "../components/Navbar"
import CursorPointer from "../components/cursor/CursorPointer"
import RevealImage from "../components/shared/RevealImage"
import Aos from "aos"

const Leadership = ({ data }) => {
  const leadership = data?.allStrapiLeadership?.edges[0]?.node?.data?.attributes

  const [mouseSize, setMouseSize] = useState(12)
  const [mouseText, setMouseText] = useState("")

  const handleMouse = (size, text) => {
    setMouseSize(size)
    setMouseText(text)
  }

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <CursorPointer size={mouseSize} text={mouseText} />
      <Navbar handleMouse={handleMouse} />
      <div id="app" style={{ cursor: "none" }}>
        <div className="app-container" data-namespace="about">
          <div className="content-wrapper scrollable">
            <div className="main">
              <div className="logo--mobile ">
                <a href="/" data-section="0" className=" is-current ">
                  <img
                    width="140px"
                    src="https://res.cloudinary.com/image/upload/c_scale,w_140/v1566712787/codewave-logo-2x_tl2pvw.png"
                    className="lazyload"
                  />
                </a>
              </div>
              <YoutubeHero data={leadership} handleMouse={handleMouse} />

              <div className="about__image1">
                <div className="container-fluid">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-sm-10">
                      <div className="img-fluid">
                        <RevealImage>
                          <img
                            src={
                              leadership?.leaderBanner?.data?.attributes
                                ?.localFile?.childImageSharp?.fluid?.src
                            }
                            style={{ objectFit: "cover" }}
                          />
                        </RevealImage>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about__who">
                <div className="container-fluid">
                  <div className="row  no-gutters">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                      <div className="img-fluid">
                        <picture className="work__bg-image">
                          <RevealImage>
                            <img
                              src={
                                leadership?.leadershipSectionOne?.image?.data
                                  ?.attributes?.localFile?.childImageSharp
                                  ?.fluid?.src
                              }
                              style={{ objectFit: "cover" }}
                            />
                          </RevealImage>
                        </picture>
                      </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 col-md-4">
                      <div className="about__who-content">
                        <h3 className="title--title6">
                          {leadership?.leadershipSectionOne?.heading}
                        </h3>
                        <div
                          className="txt--p3"
                          dangerouslySetInnerHTML={{
                            __html:
                              leadership?.leadershipSectionOne?.description,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <TextSlider
                text={
                  "Authenticity — Voice - Influence — Empathy - Self awareness"
                }
              />

              <div className="about__why">
                <div className="container-fluid">
                  <div className="row  no-gutters">
                    <div className="col-sm-1 col-md-2"></div>
                    <div className="col-sm-6 col-md-4">
                      <h3 className="title--title6">
                        {" "}
                        {leadership?.leadershipSectionTwo?.heading}
                      </h3>
                      <div
                        className="txt--p3"
                        dangerouslySetInnerHTML={{
                          __html: leadership?.leadershipSectionTwo?.description,
                        }}
                      />
                    </div>
                    <div className="col-sm-1 col-md-1"></div>
                    <div className="col-sm-4 col-md-4">
                      <div className="img-fluid">
                        <picture
                          className="work__bg-image margin-top-0-mob"
                          style={{ marginTop: "-60px" }}
                        >
                          <RevealImage>
                            <img
                              src={
                                leadership?.leadershipSectionTwo?.image?.data
                                  ?.attributes?.localFile?.childImageSharp
                                  ?.fluid?.src
                              }
                              style={{ objectFit: "cover" }}
                            />
                          </RevealImage>
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <FooterAboveText arabic={false} handleMouse={handleMouse} />
            </div>
          </div>
        </div>
      </div>

      <div className="overlay"></div>
    </>
  )
}

export default Leadership

export const query = graphql`
  query ledaershipEn {
    allStrapiLeadership {
      edges {
        node {
          data {
            attributes {
              hero {
                heading
                preHeading
                youtubeUrl
                subHeading
                youtubeThumbnail {
                  data {
                    attributes {
                      url
                      localFile {
                        childImageSharp {
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
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
              leadershipSectionOne {
                description
                heading
                id
                image {
                  data {
                    attributes {
                      localFile {
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  }
                }
              }
              locale
              leadershipSectionTwo {
                description
                heading
                image {
                  data {
                    attributes {
                      localFile {
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
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
