import { graphql, Link } from "gatsby"
import React, { useEffect, useState } from "react"
import FooterAboveText from "../../components/shared/FooterAboveText"
import YoutubeHero from "../../components/shared/YoutubeHero"
import TextSlider from "../../components/TextSlider"
import Aos from "aos"
import GatsbyImageReveal from "../../components/shared/GatsbyImageReveal"
import LayoutWrapper from "../../components/LayoutWrapper"

const GrowingLeader = ({ data, location }) => {
  const growingLeader =
    data?.allStrapiGrowingLeader?.edges[0]?.node?.data?.attributes
      ?.localizations?.data[0]?.attributes

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
    <LayoutWrapper
      mouseSize={mouseSize}
      mouseText={mouseText}
      handleMouse={handleMouse}
      location={location}
      seo={growingLeader?.seo}
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
              <YoutubeHero data={growingLeader} handleMouse={handleMouse} />
              <div className="about__image1">
                <div className="container-fluid">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-sm-10">
                      <div className="img-fluid">
                        <GatsbyImageReveal
                          src={
                            growingLeader?.leaderBanner?.data?.attributes
                              ?.localFile
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__what" style={{ marginTop: "60px" }}>
                {growingLeader?.leaderPoints?.map((item, i) => (
                  <div className="container-fluid" key={i}>
                    <div
                      className={`row no-gutters ${
                        i % 2 != 0 ? "gray-bg-strip" : "white-bg-strip"
                      } `}
                    >
                      <div className="col-sm-1 col-md-2"></div>
                      <div className="col-sm-6 col-md-8">
                        <h4 className="txt--p5" data-aos="fade-up">
                          <span className="title__number">0{i + 1}.</span>
                          {item?.heading}
                        </h4>

                        <div
                          className="txt--p3"
                          data-aos="fade-up"
                          data-aos-delay="200"
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <TextSlider
                text={
                  " Social Intelligence - Emotional Intelligence - Logic Intelligence, Leadership - Impact"
                }
              />
              <div className="about__what" style={{ marginTop: "60px" }}></div>
              <div className="about__where" style={{ marginTop: "30px" }}>
                <div className="container-fluid">
                  <div className="row  no-gutters">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                      <div
                        className="img-fluid margin-top-minus-30-mob"
                        style={{ marginTop: "30px" }}
                      >
                        <picture className="work__bg-image">
                          <GatsbyImageReveal
                            src={
                              growingLeader?.growLeaderSection?.image?.data
                                ?.attributes?.localFile
                            }
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 col-md-4">
                      <div className="about__who-content">
                        <h4 className="txt--p5" data-aos="fade-up">
                          <span className="title__number"></span>
                          {growingLeader?.growLeaderSection?.preHeading}
                        </h4>
                        <h3
                          className="title--title6"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          {growingLeader?.growLeaderSection?.heading}
                        </h3>
                        <div className="txt--p3">
                          <div
                            className="text--p3"
                            data-aos="fade-up"
                            data-aos-delay="400"
                            dangerouslySetInnerHTML={{
                              __html:
                                growingLeader?.growLeaderSection?.description,
                            }}
                          />
                          <br />
                          <Link
                            to={growingLeader?.growLeaderSection?.btnLink1}
                            onMouseEnter={() => handleMouse(40, "")}
                            onMouseLeave={() => handleMouse(12, "")}
                          >
                            <button
                              data-aos="fade-up"
                              data-aos-delay="600"
                              className="download__button margin-mob-bottom-20"
                              style={{
                                backgroundColor: "#006eff",
                                color: "white",
                                marginRight: "5px",
                                cursor: "pointer",
                              }}
                            >
                              {growingLeader?.growLeaderSection?.btnText1}
                            </button>
                          </Link>
                          <Link
                            to={growingLeader?.growLeaderSection?.btnLink2}
                            onMouseEnter={() => handleMouse(40, "")}
                            onMouseLeave={() => handleMouse(12, "")}
                          >
                            <button
                              data-aos="fade-up"
                              data-aos-delay="600"
                              className="download__button margin-mob-bottom-20"
                              style={{ cursor: "pointer" }}
                            >
                              {growingLeader?.growLeaderSection?.btnText2}
                            </button>
                          </Link>
                        </div>
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
    </LayoutWrapper>
  )
}

export default GrowingLeader

export const query = graphql`
  query growingAr {
    allStrapiGrowingLeader {
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
                    leaderBanner {
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
      }
    }
  }
`
