import { graphql, Link } from "gatsby"
import React from "react"
import FooterAboveText from "../../components/shared/FooterAboveText"
import TextSlider from "../../components/TextSlider"

const Leadership = ({ data }) => {
  const leadership =
    data?.allStrapiLeadership?.edges[0]?.node?.data?.attributes?.localizations
      ?.data[0]?.attributes

  console.log(leadership, "PROPS")

  return (
    <>
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
              <div className="about__top pattern-leadership-cafe">
                <div className="container-fluid mobile-display-none">
                  <div
                    className="row justify-content-center align-items-end  no-gutters"
                    style={{ paddingTop: "150px" }}
                  >
                    <div className="col-sm-8">
                      <Link to={leadership?.hero?.youtubeUrl} target="_blank">
                        <img
                          src={`${leadership?.hero?.youtubeThumbnail?.data?.attributes?.localFile?.childImageSharp?.fluid?.src}`}
                          className="gm-loaded gm-observing gm-observing-cb"
                          className="lazyload"
                        />
                      </Link>

                      <h2 className="txt--p2" style={{ marginTop: "30px" }}>
                        {leadership?.hero?.preHeading}
                      </h2>
                      <h1 className="title--title2">
                        {leadership?.hero?.heading}
                      </h1>
                      <br />
                      <h2 className="txt--p2">
                        <span className="yellow-bg">
                          {leadership?.hero?.subHeading}
                          &#x27F6;
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="container-fluid web-display-none">
                  <div
                    className="row justify-content-center align-items-end  no-gutters"
                    style={{ paddingTop: "150px" }}
                  >
                    <div className="col-sm-8">
                      <Link to={leadership?.hero?.youtubeUrl} target="_blank">
                        <img
                          src={`${leadership?.hero?.youtubeThumbnail?.data?.attributes?.localFile?.childImageSharp?.fluid?.src}`}
                          className="gm-loaded gm-observing gm-observing-cb"
                          className="lazyload"
                        />
                      </Link>

                      <h2 className="txt--p2" style={{ marginTop: "30px" }}>
                        {leadership?.hero?.preHeading}
                      </h2>
                      <h1 className="title--title2">
                        {leadership?.hero?.heading}
                      </h1>
                      <br />
                      <h2 className="txt--p2">
                        <span className="yellow-bg">
                          {leadership?.hero?.subHeading}
                          &#x27F6;
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about__image1">
                <div className="container-fluid">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-sm-10">
                      <div className="img-fluid">
                        <img
                          src={
                            leadership?.leaderBanner?.data?.attributes
                              ?.localFile?.childImageSharp?.fluid?.src
                          }
                          className=" lazyload"
                          style={{ transform: "translate3d(0px, 0px, 0px)" }}
                        />
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
                          <img
                            src={
                              leadership?.leadershipSectionOne?.image?.data
                                ?.attributes?.localFile?.childImageSharp?.fluid
                                ?.src
                            }
                            className="lazyload"
                          />
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
                          <img
                            src={
                              leadership?.leadershipSectionTwo?.image?.data
                                ?.attributes?.localFile?.childImageSharp?.fluid
                                ?.src
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

export default Leadership

export const query = graphql`
  query leadershipAr {
    allStrapiLeadership {
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
                      youtubeUrl
                      subHeading
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
      }
    }
  }
`
