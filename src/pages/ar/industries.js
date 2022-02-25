import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"
import IndustryItemCard from "../../components/industry/IndustryItemCard"
import TextSlider from "../../components/TextSlider"
import FooterAboveText from "../../components/shared/FooterAboveText"
import Navbar from "../../components/Navbar"
import CursorPointer from "../../components/cursor/CursorPointer"
import Aos from "aos"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Industries = ({ data }) => {
  const commonSections =
    data?.allStrapiIndustrysingle?.edges[0]?.node?.data?.attributes
      ?.commonSections
  const landing =
    data?.allStrapiIndustrysingle?.edges[0]?.node?.data?.attributes
      ?.localizations?.data[0]?.attributes

  const industries =
    data?.allStrapiIndustrie?.edges[0]?.node?.data[0]?.attributes?.localizations
      ?.data

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
      <CursorPointer size={mouseSize} text={mouseText} />
      <Navbar handleMouse={handleMouse} />
      <div id="app" style={{ cursor: "none" }}>
        <div className="app-container" data-namespace="about">
          <div className="content-wrapper scrollable">
            <div className="main">
              <div className="logo--mobile ">
                <a href="/" data-section="0" className=" is-current ">
                  <img
                    src="https://res.cloudinary.com/image/upload/c_scale,w_140/v1566712787/codewave-logo-2x_tl2pvw.png"
                    className="lazyload"
                  />
                </a>
              </div>{" "}
              <div className="work-detail">
                <div
                  className="module module--header"
                  style={{
                    backgroundColor: "#e36342",
                    backgroundImage: `url(${`${landing?.bannerImage?.data?.attributes?.url}`})`,
                  }}
                >
                  <div
                    className="module module--title"
                    style={{ background: "#00000020", marginBottom: "100px" }}
                  >
                    <div
                      className="container-fluid"
                      style={{ marginTop: `60px` }}
                    >
                      <div className="row no-gutters justify-content-center">
                        <div className="col-sm-6 col-md-6">
                          <h1
                            className="title--title1"
                            style={{ color: "#fff" }}
                          >
                            {landing?.heading1}{" "}
                            <span style={{ color: "black" }}>
                              {landing?.heading2}
                            </span>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work-content" id="work-content">
                <div className="module module--title">
                  <div className="container-fluid">
                    <div className="row no-gutters justify-content-center">
                      <div className="col-sm-10 col-md-8">
                        <h1
                          className="title--title1 mob-title-med"
                          style={{ fontSize: "60px" }}
                        >
                          {landing?.industryIntro?.heading}
                          <br />
                          {landing?.industryIntro?.heading2}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="module module--intro">
                  <div className="container-fluid">
                    <div className="row no-gutters justify-content-center">
                      <div className="col-sm-12 col-md-8">
                        <div className="work__intro mobile-margin-fix-30">
                          <div
                            className="txt--p3"
                            style={{ marginTop: "-80px" }}
                            data-aos="fade-up"
                            data-aos-delya="200"
                            dangerouslySetInnerHTML={{
                              __html: landing?.industryIntro?.description,
                            }}
                          />
                        </div>
                        <div style={{ marginTop: "30px" }}>
                          <GatsbyImage
                            image={getImage(
                              landing?.industryIntro?.image?.data?.attributes
                                ?.localFile
                            )}
                            alt=""
                          />
                        </div>
                      </div>

                      <div
                        className="col-12 col-md-8"
                        style={{ marginTop: "80px" }}
                      >
                        <div class="work__client txt--p5">
                          <span
                            style={{
                              color: "rgb(0, 0, 0)",
                              fontSize: "32px",
                              backgroundColor: "yellow",
                              fontWeight: "bold",
                            }}
                          >
                            {landing?.industryIntro?.exampleHeading}
                          </span>
                          <div style={{ marginTop: "20px" }}>
                            {landing?.industryIntro?.examples?.map(
                              (item, i) => (
                                <div
                                  data-aos="fade-up"
                                  data-aos-delay={i * 200}
                                >
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: item?.listitems,
                                    }}
                                    key={i}
                                  />
                                  <br />
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div
                  className="row no-gutters justify-content-center"
                  style={{ margin: "0 auto" }}
                >
                  {industries.map((industry, i) => (
                    <IndustryItemCard data={industry} key={i} />
                  ))}
                </div>
              </div>
              <div className="module">
                <div className="container-fluid">
                  <div
                    className="row no-gutters padding_on_top"
                    style={{ marginTop: "-30px" }}
                  >
                    <div className="col-sm-2"></div>
                    <div className="col-sm-5 col-md-8">
                      <h3 className="title--title5" data-aos="fade-up">
                        <span className="title__number"></span>
                        {landing?.industryOutro?.heading}
                      </h3>

                      <div className="txt--p3" style={{ marginTop: "30px" }}>
                        <div
                          data-aos="fade-up"
                          data-aos-delay="200"
                          dangerouslySetInnerHTML={{
                            __html: landing?.industryOutro?.description,
                          }}
                        />
                        <Link
                          to={landing?.industryOutro?.link}
                          onMouseEnter={() => handleMouse(40, "")}
                          onMouseLeave={() => handleMouse(12, "")}
                        >
                          <u data-aos="fade-up" data-aos-delay="400">
                            {landing?.industryOutro?.textLink}
                          </u>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <TextSlider text="IoT - Digital Transformation - Design Thinking - Architecture" />
              <FooterAboveText arabic={true} handleMouse={handleMouse} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Industries

export const industryListingQuery = graphql`
  query industryListingAr {
    allStrapiIndustrie {
      edges {
        node {
          data {
            attributes {
              title
              slug
              commonSlug
              smallDescription
              industrylistimg {
                data {
                  attributes {
                    url
                  }
                }
              }
              localizations {
                data {
                  attributes {
                    title
                    commonSlug
                    smallDescription
                    industrylistimg {
                      data {
                        attributes {
                          alternativeText
                          url
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
    allStrapiIndustrysingle {
      edges {
        node {
          data {
            attributes {
              locale
              localizations {
                data {
                  attributes {
                    industryIntro {
                      exampleHeading
                      heading
                      heading2
                      description
                      para1
                      para2
                      examples {
                        listitems
                      }
                      image {
                        data {
                          attributes {
                            url
                            localFile {
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
                    industryOutro {
                      heading
                      link
                      para1
                      para2
                      textLink
                      description
                    }
                    locale
                    bannerBgColor

                    heading1
                    heading2

                    bannerImage {
                      data {
                        attributes {
                          url
                          alternativeText
                        }
                      }
                    }
                  }
                }
              }

              bannerBgColor

              heading1
              heading2

              bannerImage {
                data {
                  attributes {
                    url
                    alternativeText
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
