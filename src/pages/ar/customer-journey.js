import Aos from "aos"
import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import LayoutWrapper from "../../components/LayoutWrapper"
import FooterAboveText from "../../components/shared/FooterAboveText"
import GatsbyImageReveal from "../../components/shared/GatsbyImageReveal"
import YoutubeHero from "../../components/shared/YoutubeHero"
import TextSlider from "../../components/TextSlider"

const CustomerJourney = ({ data, location }) => {
  const customer =
    data?.allStrapiCustomerjourney?.edges[0]?.node?.data?.attributes
      ?.localizations?.data[0]?.attributes

  const section = customer?.sections

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
      seo={customer?.seo}
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
              <YoutubeHero data={customer} handleMouse={handleMouse} />

              <div className="about__image1">
                <div className="container-fluid">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-sm-10">
                      <div className="img-fluid">
                        <GatsbyImageReveal
                          src={customer?.banner?.data?.attributes?.localFile}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about__what">
                <div className="container-fluid">
                  <div className="row no-gutters">
                    <div className="col-sm-1 col-md-2"></div>
                    <div className="col-sm-6 col-md-4">
                      <h4 className="txt--p5" data-aos="fade-up">
                        <span className="title__number">
                          {section[0]?.number}.
                        </span>
                        {section[0]?.preHeading}
                      </h4>
                      <h3
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="title--title6"
                      >
                        {section[0]?.heading}
                      </h3>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="txt--p3"
                        dangerouslySetInnerHTML={{
                          __html: section[0]?.description,
                        }}
                      />
                    </div>
                    <div className="col-sm-1 col-md-2"></div>
                    <div className="col-sm-3 col-md-4">
                      <ul className="txt--p5">
                        {section[0]?.listItems?.map((item, i) => (
                          <li
                            data-aos="fade-up"
                            data-aos-delay={i * 200}
                            key={i}
                          >
                            - {item?.listitems}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={section[0]?.btnLink}
                        onMouseEnter={() => handleMouse(40, "")}
                        onMouseLeave={() => handleMouse(12, "")}
                      >
                        <button className="download__button">
                          {section[0]?.btnText}
                        </button>
                      </a>
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
                          <GatsbyImageReveal
                            src={section[1]?.image?.data?.attributes?.localFile}
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 col-md-4">
                      <div className="about__who-content">
                        <h4 className="txt--p5">
                          <span className="title__number" data-aos="fade-up">
                            {section[1]?.number}.
                          </span>
                          {section[1]?.preHeading}
                        </h4>
                        <h3
                          className="title--title6"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          {section[1]?.heading}
                        </h3>
                        <div className="txt--p3">
                          <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            dangerouslySetInnerHTML={{
                              __html: section[1]?.description,
                            }}
                          />
                          <a
                            href={section[0]?.btnLink}
                            onMouseEnter={() => handleMouse(40, "")}
                            onMouseLeave={() => handleMouse(12, "")}
                          >
                            <button className="download__button">
                              {section[0]?.btnText}
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <TextSlider text="Design thinking - UI/UX - Moderninization - Cloud ??? Edge" />

              <div className="about__how">
                <div className="container-fluid">
                  <div className="row  no-gutters">
                    <div className="col-sm-1 col-md-2"></div>
                    <div className="col-sm-5 col-md-4">
                      <h4 className="txt--p5" data-aos="fade-up">
                        <span className="title__number">
                          {section[2]?.number}.
                        </span>
                        {section[2]?.preHeading}
                      </h4>
                      <h3
                        className="title--title6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        {section[2]?.heading}
                      </h3>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="txt--p3"
                        dangerouslySetInnerHTML={{
                          __html: section[2]?.description,
                        }}
                      />
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4">
                      <ul className="txt--p5">
                        {section[2]?.listItems?.map((item, i) => (
                          <li
                            data-aos="fade-up"
                            data-aos-delay={100 * i}
                            key={i}
                          >
                            - {item?.listitems}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={section[2]?.btnLink}
                        onMouseEnter={() => handleMouse(40, "")}
                        onMouseLeave={() => handleMouse(12, "")}
                      >
                        <button className="download__button">
                          {section[2]?.btnText}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__where" style={{ marginTop: "30px" }}>
                <div className="container-fluid">
                  <div className="row  no-gutters">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                      <div className="img-fluid" style={{ marginTop: "30px" }}>
                        <picture className="work__bg-image">
                          \
                          <GatsbyImageReveal
                            src={section[3]?.image?.data?.attributes?.localFile}
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div
                      className="col-sm-5 col-md-4"
                      style={{ marginTop: "30px" }}
                    >
                      <div className="about__who-content">
                        <h4 className="txt--p5">
                          <span className="title__number" data-aos="fade-up">
                            {" "}
                            {section[3]?.number}.
                          </span>
                          {section[3]?.preHeading}
                        </h4>
                        <h3
                          className="title--title6"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          {section[3]?.heading}
                        </h3>
                        <div className="txt--p3">
                          <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            dangerouslySetInnerHTML={{
                              __html: section[3]?.description,
                            }}
                          />
                          <a
                            href={section[3]?.btnLink}
                            onMouseEnter={() => handleMouse(40, "")}
                            onMouseLeave={() => handleMouse(12, "")}
                          >
                            <button className="download__button">
                              {section[3]?.btnText}
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <FooterAboveText handleMouse={handleMouse} />
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default CustomerJourney

export const query = graphql`
  query customerAr {
    allStrapiCustomerjourney {
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
                    banner {
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
                    locale
                    sections {
                      btnLink
                      btnText
                      description
                      heading
                      number
                      preHeading
                      strapi_component
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
                      listItems {
                        listitems
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
