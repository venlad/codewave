import { graphql, Link } from "gatsby"
import React from "react"
import FooterAboveText from "../../components/shared/FooterAboveText"
import YoutubeHero from "../../components/shared/YoutubeHero"
import TextSlider from "../../components/TextSlider"
import Navbar from "../../components/Navbar"

const About = ({ data }) => {
  const about =
    data?.allStrapiAbout?.edges[0]?.node?.data?.attributes?.localizations
      ?.data[0]?.attributes

  const section = about?.sections

  return (
    <>
      <Navbar arabic={true} />
      <div id="app">
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
              </div>
              <YoutubeHero data={about} />

              <div className="about__image1">
                <div className="container-fluid">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-sm-10">
                      <div className="img-fluid">
                        <img
                          className=" lazyload"
                          style={{ transform: "translate3d(0px, 0px, 0px)" }}
                          src={
                            about?.aboutBanner?.data?.attributes?.localFile
                              ?.childImageSharp?.fluid?.src
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
                    <div className="col-sm-1 col-md-2"></div>
                    <div className="col-sm-6 col-md-4">
                      <h4 className="txt--p5">
                        <span className="title__number">
                          {section[0]?.number}.
                        </span>
                        {section[0]?.preHeading}
                      </h4>
                      <h3 className="title--title6">{section[0]?.heading}</h3>
                      <div
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
                          <li key={i}>- {item?.listitems}</li>
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
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                      <div className="img-fluid">
                        <picture className="work__bg-image">
                          <img
                            src={
                              section[1]?.image?.data?.attributes?.localFile
                                ?.childImageSharp?.fluid?.src
                            }
                            className="lazyload"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 col-md-4">
                      <div className="about__who-content">
                        <h4 className="txt--p5">
                          <span className="title__number">
                            {section[1]?.number}.
                          </span>
                          {section[1]?.preHeading}
                        </h4>
                        <h3 className="title--title6">{section[1]?.heading}</h3>
                        <div
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
                      <h4 className="txt--p5">
                        <span className="title__number">
                          {section[2]?.number}.
                        </span>
                        {section[2]?.preHeading}
                      </h4>
                      <h3 className="title--title6">{section[2]?.heading}</h3>
                      <div
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
                          <li key={i}>- {item?.listitems}</li>
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
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                      <div className="img-fluid" style={{ marginTop: "30px" }}>
                        <picture className="work__bg-image">
                          <img
                            src={
                              section[3]?.image?.data?.attributes?.localFile
                                ?.childImageSharp?.fluid?.src
                            }
                            className="lazyload"
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
                          <span className="title__number">
                            {" "}
                            {section[3]?.number}.
                          </span>
                          {section[3]?.preHeading}
                        </h4>
                        <h3 className="title--title6">{section[3]?.heading}</h3>
                        <div
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
                      <h4 className="txt--p5">
                        <span className="title__number">
                          {section[4]?.number}.
                        </span>
                        {section[4]?.preHeading}
                      </h4>
                      <h3 className="title--title6">{section[4]?.heading}</h3>
                      <div
                        className="txt--p3"
                        dangerouslySetInnerHTML={{
                          __html: section[4]?.description,
                        }}
                      />
                    </div>
                    <div className="col-sm-1 col-md-1"></div>
                    <div className="col-sm-4 col-md-4">
                      <div className="img-fluid">
                        <picture
                          className="work__bg-image"
                          style={{ margin: "30px 0px" }}
                        >
                          <img
                            src={
                              section[4]?.image?.data?.attributes?.localFile
                                ?.childImageSharp?.fluid?.src
                            }
                            className="lazyload"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <FooterAboveText />
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
  query aboutAr {
    allStrapiAbout {
      edges {
        node {
          data {
            attributes {
              localizations {
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
      }
    }
  }
`
