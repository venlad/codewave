import Aos from "aos"
import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import CursorPointer from "../../components/cursor/CursorPointer"
import Navbar from "../../components/Navbar"
import FooterAboveText from "../../components/shared/FooterAboveText"
import GatsbyImageReveal from "../../components/shared/GatsbyImageReveal"
import RevealImage from "../../components/shared/RevealImage"
import YoutubeHero from "../../components/shared/YoutubeHero"
import TextSlider from "../../components/TextSlider"

const SurvialManual = ({ data }) => {
  const survival =
    data?.allStrapiSurvivalmanual?.edges[0]?.node?.data?.attributes
      ?.localizations?.data[0]?.attributes
  const survivalPoints1 = survival?.survivalPoints?.slice(0, 4)
  const survivalPoints2 = survival?.survivalPoints?.slice(4)

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
                <a href="/" className=" is-current ">
                  <img
                    width="140px"
                    src="https://res.cloudinary.com/image/upload/c_scale,w_140/v1566712787/codewave-logo-2x_tl2pvw.png"
                    className="lazyload"
                  />
                </a>
              </div>
              <YoutubeHero data={survival} handleMouse={handleMouse} />

              <div className="about__image1">
                <div className="container-fluid">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-sm-10">
                      <div className="img-fluid">
                        <GatsbyImageReveal
                          src={survival?.banner?.data?.attributes?.localFile}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about__what" style={{ marginTop: "60px" }}>
                {survivalPoints1?.map((item, i) => (
                  <div className="container-fluid" key={i}>
                    <div
                      className={`row no-gutters ${
                        i % 2 != 0 ? "gray-bg-strip" : "white-bg-strip"
                      } `}
                    >
                      <div className="col-sm-1 col-md-2"></div>
                      <div className="col-sm-6 col-md-8">
                        <h4
                          className="txt--p5"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <span className="title__number">0{i + 1}.</span>
                          {item?.preHeading}
                        </h4>
                        <h3
                          className="title--title6"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          {item?.heading}
                        </h3>
                        <div
                          className="txt--p3"
                          data-aos="fade-up"
                          data-aos-delay="400"
                        >
                          <p>{item?.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <TextSlider
                text={
                  "Ownership - Dependability - Competence - Teamplay - Impact - Ownership - Dependability - Competence - Teamplay - Impact"
                }
              />

              <div className="about__what" style={{ marginTop: "60px" }}>
                {survivalPoints2?.map((item, i) => (
                  <div className="container-fluid" key={i}>
                    <div
                      className={`row no-gutters ${
                        i % 2 == 0 ? "gray-bg-strip" : "white-bg-strip"
                      } `}
                    >
                      <div className="col-sm-1 col-md-2"></div>
                      <div className="col-sm-6 col-md-8">
                        <h4
                          className="txt--p5"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <span className="title__number">
                            {i < 5 && 0}
                            {i + 5}.
                          </span>
                          {item?.preHeading}
                        </h4>
                        <h3
                          className="title--title6"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          {item?.heading}
                        </h3>
                        <div
                          className="txt--p3"
                          data-aos="fade-up"
                          data-aos-delay="400"
                        >
                          <p>{item?.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="about__where" style={{ marginTop: "30px" }}>
                <div className="container-fluid">
                  <div className="row  no-gutters">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                      <div className="img-fluid" style={{ marginTop: "30px" }}>
                        <picture className="work__bg-image">
                          <GatsbyImageReveal
                            src={
                              survival?.survialSection?.image?.data?.attributes
                                ?.localFile
                            }
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 col-md-4">
                      <div className="about__who-content">
                        <h4 className="txt--p5">
                          <span
                            className="title__number"
                            data-aos="fade-up"
                            data-aos-delay="100"
                          ></span>
                          {survival?.survialSection?.preHeading}
                        </h4>
                        <h3
                          className="title--title6"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          {survival?.survialSection?.heading}
                        </h3>
                        <div className="txt--p3">
                          <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            dangerouslySetInnerHTML={{
                              __html: survival?.survialSection?.description,
                            }}
                          />
                          <a
                            href={survival?.survialSection?.btnLink1}
                            onMouseEnter={() => handleMouse(40, "")}
                            onMouseLeave={() => handleMouse(12, "")}
                          >
                            <button
                              data-aos="fade-up"
                              data-aos-delay="500"
                              className="download__button"
                              style={{ marginTop: "30px" }}
                            >
                              {survival?.survialSection?.btnText1}
                            </button>
                          </a>
                        </div>
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
    </>
  )
}

export default SurvialManual

export const query = graphql`
  query survivalAr {
    allStrapiSurvivalmanual {
      edges {
        node {
          data {
            attributes {
              localizations {
                data {
                  attributes {
                    banner {
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
                    hero {
                      heading
                      preHeading
                      subHeading
                      youtubeUrl
                      youtubeThumbnail {
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
                    survialSection {
                      btnLink1
                      btnLink2
                      btnText1
                      btnText2
                      description
                      heading
                      id
                      preHeading
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
                    survivalPoints {
                      description
                      heading
                      preHeading
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
