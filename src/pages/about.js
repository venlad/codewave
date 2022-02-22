import Aos from "aos"
import { graphql, Link } from "gatsby"
import React, { useEffect, useState } from "react"
import CursorPointer from "../components/cursor/CursorPointer"
import Navbar from "../components/Navbar"
import FooterAboveText from "../components/shared/FooterAboveText"
import RevealImage from "../components/shared/RevealImage"
import YoutubeHero from "../components/shared/YoutubeHero"
import TextSlider from "../components/TextSlider"

const About = ({ data }) => {
  const about = data?.allStrapiAbout?.edges[0]?.node?.data?.attributes
  const section = about?.sections

  const [mouseSize, setMouseSize] = useState(12)
  const [mouseText, setMouseText] = useState("")

  const handleMouse = (size, text) => {
    setMouseSize(size)
    setMouseText(text)
  }

  useEffect(() => {
    Aos.init({
      delay: 100,
      once: true,
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
                <Link to="/" data-section="0" className=" is-current ">
                  <img
                    src="https://res.cloudinary.com/image/upload/c_scale,w_140/v1566712787/codewave-logo-2x_tl2pvw.png"
                    className="lazyload"
                  />
                </Link>
              </div>
              <YoutubeHero data={about} handleMouse={handleMouse} />

              <div className="about__image1">
                <div className="container-fluid">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-sm-10">
                      <div className="img-fluid" style={{ minHeight: "400px" }}>
                        <RevealImage>
                          <img
                            style={{ objectFit: "contain" }}
                            src={
                              about?.aboutBanner?.data?.attributes?.localFile
                                ?.childImageSharp?.fluid?.src
                            }
                          />
                        </RevealImage>
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
                        className="title--title6"
                        data-aos="fade-up"
                        data-aos-delay="200"
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
                            data-aos-delay={i * 250}
                            key={i}
                          >
                            - {item?.listitems}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__who">
                <div className="container-fluid">
                  <div className="row  no-gutters">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center">
                      <div className="img-fluid">
                        <picture className="work__bg-image">
                          <RevealImage>
                            <img
                              src={
                                section[1]?.image?.data?.attributes?.localFile
                                  ?.childImageSharp?.fluid?.src
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
                        <h4 className="txt--p5" data-aos="fade-up">
                          <span className="title__number">
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
                        <div
                          data-aos="fade-up"
                          data-aos-delay="400"
                          className="txt--p3"
                          dangerouslySetInnerHTML={{
                            __html: section[1]?.description,
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
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 250}
                          >
                            - {item?.listitems}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about__where" style={{ marginTop: "30px" }}>
                <div className="container-fluid">
                  <div className="row  no-gutters">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center">
                      <div className="img-fluid" style={{ marginTop: "30px" }}>
                        <picture className="work__bg-image">
                          <RevealImage>
                            <img
                              src={
                                section[3]?.image?.data?.attributes?.localFile
                                  ?.childImageSharp?.fluid?.src
                              }
                              style={{ objectFit: "cover" }}
                            />
                          </RevealImage>
                        </picture>
                      </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div
                      className="col-sm-5 col-md-4"
                      style={{ marginTop: "30px" }}
                    >
                      <div className="about__who-content">
                        <h4 className="txt--p5" data-aos="fade-up">
                          <span className="title__number">
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
                        <div
                          data-aos="fade-up"
                          data-aos-delay="400"
                          className="txt--p3"
                          dangerouslySetInnerHTML={{
                            __html: section[3]?.description,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about__why">
                <div className="container-fluid">
                  <div className="row  no-gutters">
                    <div className="col-sm-1 col-md-2"></div>
                    <div className="col-sm-6 col-md-4">
                      <h4 className="txt--p5" data-aos="fade-up">
                        <span className="title__number">
                          {section[4]?.number}.
                        </span>
                        {section[4]?.preHeading}
                      </h4>
                      <h3
                        className="title--title6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        {section[4]?.heading}
                      </h3>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="txt--p3"
                        dangerouslySetInnerHTML={{
                          __html: section[4]?.description,
                        }}
                      />
                    </div>
                    <div className="col-sm-1 col-md-1"></div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center">
                      <div className="img-fluid">
                        <picture
                          className="work__bg-image"
                          style={{ margin: "30px 0px" }}
                        >
                          <RevealImage>
                            <img
                              src={
                                section[4]?.image?.data?.attributes?.localFile
                                  ?.childImageSharp?.fluid?.src
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

export default About

export const query = graphql`
  query aboutEn {
    allStrapiAbout {
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
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            placeholder: BLURRED
                            layout: FULL_WIDTH
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
              aboutBanner {
                data {
                  attributes {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          placeholder: BLURRED
                          layout: FULL_WIDTH
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
              sections {
                description
                heading
                number
                listItems {
                  listitems
                }
                preHeading
                strapi_component
                image {
                  data {
                    attributes {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            placeholder: BLURRED
                            layout: FULL_WIDTH
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
              locale
            }
          }
        }
      }
    }
  }
`
