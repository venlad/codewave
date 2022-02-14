import { graphql, Link } from "gatsby"
import React from "react"
import FooterAboveText from "../../components/shared/FooterAboveText"
import YoutubeHero from "../../components/shared/YoutubeHero"
import TextSlider from "../../components/TextSlider"
import Layout from "../../components/Layout.js"

const GrowingLeader = ({ data }) => {
  const growingLeader =
    data?.allStrapiGrowingLeader?.edges[0]?.node?.data?.attributes
      ?.localizations?.data[0]?.attributes

  console.log(growingLeader, "PROPS")

  return (
    <Layout>
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
              <YoutubeHero data={growingLeader} />
              <div className="about__image1">
                <div className="container-fluid">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-sm-10">
                      <div className="img-fluid">
                        <img
                          src={
                            growingLeader?.leaderBanner?.data?.attributes
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
                        <h4 className="txt--p5">
                          <span className="title__number">0{i + 1}.</span>
                          {item?.heading}
                        </h4>

                        <div
                          className="txt--p3"
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
                          <img
                            src={
                              growingLeader?.growLeaderSection?.image?.data
                                ?.attributes?.localFile?.childImageSharp?.fluid
                                ?.src
                            }
                            className="lazyload"
                          />{" "}
                        </picture>
                      </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 col-md-4">
                      <div className="about__who-content">
                        <h4 className="txt--p5">
                          <span className="title__number"></span>
                          {growingLeader?.growLeaderSection?.preHeading}
                        </h4>
                        <h3 className="title--title6">
                          {growingLeader?.growLeaderSection?.heading}
                        </h3>
                        <div className="txt--p3">
                          <div
                            className="text--p3"
                            dangerouslySetInnerHTML={{
                              __html:
                                growingLeader?.growLeaderSection?.description,
                            }}
                          />
                          <br />
                          <Link to={growingLeader?.growLeaderSection?.btnLink1}>
                            <button
                              className="download__button margin-mob-bottom-20"
                              style={{
                                backgroundColor: "#006eff",
                                color: "white",
                                marginRight: "5px",
                              }}
                            >
                              {growingLeader?.growLeaderSection?.btnText1}
                            </button>
                          </Link>
                          <Link to={growingLeader?.growLeaderSection?.btnLink2}>
                            <button className="download__button margin-mob-bottom-20">
                              {growingLeader?.growLeaderSection?.btnText2}
                            </button>
                          </Link>
                        </div>
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
    </Layout>
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
