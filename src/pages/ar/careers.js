import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import FooterAboveText from "../../components/shared/FooterAboveText"
import TextSlider from "../../components/TextSlider"
import YouTubeVideo from "../../components/shared/YouTubeVideo"
import Aos from "aos"
import GatsbyImageReveal from "../../components/shared/GatsbyImageReveal"
import LayoutWrapper from "../../components/LayoutWrapper"

const Careers = ({ data, location }) => {
  const careers =
    data?.allStrapiCareer?.edges[0]?.node?.data?.attributes?.localizations
      ?.data[0]?.attributes

  const [mouseSize, setMouseSize] = useState(12)
  const [mouseText, setMouseText] = useState("")
  const [isOpen, setOpen] = useState(false)

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
    <LayoutWrapper
      mouseSize={mouseSize}
      mouseText={mouseText}
      handleMouse={handleMouse}
      location={location}
      seo={careers?.seo}
    >
      <div id="app">
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
              <div className="about__top pattern-team">
                <div className="container-fluid">
                  <div className="row justify-content-center align-items-end  no-gutters">
                    <div className="col-sm-6">
                      <h2 className="txt--p2" data-aos="fade-up">
                        {careers?.hero?.preHeading}
                      </h2>
                      <h1
                        className="title--title2"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        {careers?.hero?.heading}
                      </h1>

                      <br />
                      <br />
                      <h2
                        className="txt--p2"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <span className="yellow-bg">
                          {careers?.hero?.subHeading}
                        </span>
                      </h2>
                    </div>
                    <div className="col-sm-2">
                      <a
                        className="btn btn-info btn-sm btn-hover gallerypdf"
                        href="https://res.cloudinary.com/codewave-technologies/image/upload/v1575216128/codewave-employee-handbook_qzos5o.pdf"
                      >
                        <img
                          src={
                            careers?.hero?.youtubeThumbnail?.data?.attributes
                              ?.localFile?.publicURL
                          }
                          style={{ border: "5px solid #333" }}
                          alt="Codewave Employee Handbook - Culture Guide"
                          className="lazyload"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about__image1">
                <div className="container-fluid">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-sm-10">
                      <div className="img-fluid">
                        <GatsbyImageReveal
                          src={
                            careers?.careersBanner?.data?.attributes?.localFile
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__what">
                <div className="container-fluid">
                  <div className="row no-gutters">
                    <div className="col-sm-1 col-md-1"></div>
                    {careers?.youtubeVideos?.map((item, i) => (
                      <>
                        <YouTubeVideo
                          isOpen={isOpen}
                          close={() => setOpen(false)}
                          url={item?.youtubeUrl}
                        />

                        <div
                          className="col-sm-4 col-md-4 careers-margin-mob-fix"
                          style={{ marginLeft: "50px" }}
                        >
                          <div>
                            <img
                              onClick={() => setOpen(true)}
                              src={
                                item?.youtubeThumbnail?.data?.attributes
                                  ?.localFile?.publicURL
                              }
                              className="lazyload"
                            />

                            <h3
                              className="title--title6"
                              style={{ marginTop: "30px", color: "#000" }}
                              data-aos="fade-up"
                              data-aos-delay="200"
                            >
                              {item?.heading}
                            </h3>

                            <h3
                              className="txt--p5"
                              style={{ color: "#000" }}
                              data-aos="fade-up"
                              data-aos-delay="400"
                            >
                              {item?.subHeading}
                            </h3>
                          </div>
                        </div>
                        <div className="col-sm-1 col-md-1"></div>
                      </>
                    ))}
                  </div>
                </div>
              </div>

              <TextSlider
                text={
                  "Authenticity - Voice - Influence - Impact - Authenticity - Voice - Influence - Impact"
                }
              />

              <div className="about__awards">
                <div className="container-fluid">
                  <div className="row no-gutters">
                    <div className="col-sm-1 col-lg-1 col-xl-2"></div>
                    <div
                      className="col-sm-10 col-lg-10 col-xl-9 is-visible"
                      style={{ opacity: 1 }}
                    >
                      <h3 className="title--title6">Open Positions.</h3>
                    </div>
                  </div>
                </div>
                <div
                  className="container-fluid awards-list is-visible"
                  style={{
                    opacity: 1,
                    height: "225px",
                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                  }}
                >
                  <div className="row about__awards-award  no-gutters">
                    <div className="col-sm-1 col-lg-1 col-xl-2"></div>
                    <div className="col-sm-4 col-md-3 txt mobile txt--p5 ">
                      <span>Javascript devs.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 desktop">
                      <span>UX - ReactJS devs.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-3 txt txt--p5 desktop">
                      <span>UX - ReactNative devs.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-2 txt txt--p5 ">
                      <span>App - NodeJS devs.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 ">
                      <span>Tech Architects.</span>
                    </div>
                  </div>

                  <div className="row about__awards-award  no-gutters">
                    <div className="col-sm-1 col-lg-1 col-xl-2"></div>
                    <div className="col-sm-4 col-md-3 txt mobile txt--p5 ">
                      <span>Javascript devs.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 desktop">
                      <span>Serverless devs.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-3 txt txt--p5 desktop">
                      <span>AWS cloud architects.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-2 txt txt--p5 ">
                      <span>Google cloud devs.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 ">
                      <span>Analytics pros.</span>
                    </div>
                  </div>

                  <div className="row about__awards-award  no-gutters">
                    <div className="col-sm-1 col-lg-1 col-xl-2"></div>
                    <div className="col-sm-4 col-md-3 txt mobile txt--p5 ">
                      <span>Designers.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 desktop">
                      <span>Interaction Designers.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-3 txt txt--p5 desktop">
                      <span>Analysts.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-2 txt txt--p5 ">
                      <span>Engineers.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 ">
                      <span>Marketers.</span>
                    </div>
                  </div>

                  <div className="row about__awards-award  no-gutters">
                    <div className="col-sm-1 col-lg-1 col-xl-2"></div>
                    <div className="col-sm-4 col-md-3 txt mobile txt--p5 ">
                      <span>Designers.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 desktop">
                      <span>Agile-pros.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-3 txt txt--p5 desktop">
                      <span>Test-automators.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-2 txt txt--p5 ">
                      <span>Co-ordinators.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 ">
                      <span>Elaborators.</span>
                    </div>
                  </div>

                  <div className="row about__awards-award  no-gutters">
                    <div className="col-sm-1 col-lg-1 col-xl-2"></div>
                    <div className="col-sm-4 col-md-3 txt mobile txt--p5 ">
                      <span>Designers.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 desktop">
                      <span>Influencers.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-3 txt txt--p5 desktop">
                      <span>Explainers.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-2 txt txt--p5 ">
                      <span>Strategists.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 ">
                      <span>Executioners.</span>
                    </div>
                  </div>
                </div>

                <div className="container-fluid ">
                  <div className="row no-gutters">
                    <div className="col-sm-1 col-lg-1 col-xl-2"></div>
                    <div
                      className="col-sm-15 col-lg-10 col-xl-8"
                      style={{ textAlign: "center", marginBottom: "50px" }}
                    >
                      <a href="mailto:jobs@codewave.com">
                        <button
                          className="download__button"
                          style={{ background: "#006eff", color: "white" }}
                        >
                          {careers?.applyBtnText}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about__image1">
                <div className="container-fluid">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-sm-10">
                      <div className="img-fluid">
                        <GatsbyImageReveal
                          src={careers?.banner2?.data?.attributes?.localFile}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <FooterAboveText arabic={true} handleMouse={handleMouse} />
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default Careers

export const query = graphql`
  query careersAr {
    allStrapiCareer {
      edges {
        node {
          data {
            attributes {
              localizations {
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
                    applyBtnLink
                    applyBtnText
                    banner2 {
                      data {
                        attributes {
                          localFile {
                            publicURL
                            childImageSharp {
                              gatsbyImageData(
                                layout: FULL_WIDTH
                                placeholder: DOMINANT_COLOR
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
                    careersBanner {
                      data {
                        attributes {
                          localFile {
                            publicURL
                            childImageSharp {
                              gatsbyImageData(
                                layout: FULL_WIDTH
                                placeholder: DOMINANT_COLOR
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
                    commonFooter {
                      btnLink
                      btnText
                      heading
                      line1
                      line2
                    }
                    hero {
                      heading
                      preHeading
                      subHeading
                      youtubeUrl
                      youtubeThumbnail {
                        data {
                          attributes {
                            localFile {
                              publicURL
                              childImageSharp {
                                gatsbyImageData(
                                  layout: FULL_WIDTH
                                  placeholder: DOMINANT_COLOR
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
                    jobsOpen {
                      title
                    }
                    locale
                    youtubeVideos {
                      heading
                      id
                      subHeading
                      youtubeUrl
                      youtubeThumbnail {
                        data {
                          attributes {
                            localFile {
                              publicURL
                              childImageSharp {
                                gatsbyImageData(
                                  layout: FULL_WIDTH
                                  placeholder: DOMINANT_COLOR
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
