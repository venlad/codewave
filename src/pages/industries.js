import React from "react"
import { graphql, Link } from "gatsby"
import IndustryItemCard from "../components/industry/IndustryItemCard"
import TextSlider from "../components/TextSlider"
import FooterAboveText from "../components/shared/FooterAboveText"

const Industries = ({ data }) => {
  const industries = data?.allStrapiIndustrie?.edges[0]?.node?.data
  const commonSections =
    data?.allStrapiIndustrysingle?.edges[0]?.node?.data?.attributes
      ?.commonSections
  const landing =
    data?.allStrapiIndustrysingle?.edges[0]?.node?.data?.attributes

  return (
    <>
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
                          >
                            <p>{landing?.industryIntro?.para1}</p>

                            <p>{landing?.industryIntro?.para2}</p>
                            <br />
                            <br />
                          </div>
                        </div>
                        <div style={{ marginTop: "30px" }}>
                          <img
                            src={`${landing?.industryIntro?.image?.data?.attributes?.url}`}
                            style={{ width: "90%" }}
                            className="lazyload"
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
                                <>
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: item?.listitems,
                                    }}
                                    key={i}
                                  />
                                  <br />
                                </>
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
                      <h3 className="title--title5">
                        <span className="title__number"></span>
                        {landing?.industryOutro?.heading}
                      </h3>

                      <div className="txt--p3" style={{ marginTop: "30px" }}>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: landing?.industryOutro?.para1,
                          }}
                        />
                        <p
                          dangerouslySetInnerHTML={{
                            __html: landing?.industryOutro?.para2,
                          }}
                        />
                        <Link to={landing?.industryOutro?.link}>
                          <u>{landing?.industryOutro?.textLink}</u>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <TextSlider text="IoT - Digital Transformation - Design Thinking - Architecture" />
              <FooterAboveText arabic={false} />
              <div className="footer">
                <div className="container-fluid">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-sm-4 col-md-4 col-lg-3">
                      <div className="txt--p6">
                        © 2020 Codewave Technologies.{" "}
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-5">
                      <div className="txt--p6">
                        <a href="/privacy-policy">Privacy Policy</a> ·{" "}
                        <a href="/cookie-policy">Cookie Policy</a> ·{" "}
                        <a href="/terms-and-conditions">Terms and conditions</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cookies">
            <div className="cookies__content">
              <p>
                We use cookies to improve your browsing experience. You consent
                to our <a href="/cookie-policy">cookies policy</a> if you
                continue to use this website.
              </p>
              <button className="cookies__button">Accept</button>
              <button className="cookies__close-btn">
                <svg
                  width="13px"
                  height="13px"
                  viewBox="0 0 13 13"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="square"
                  >
                    <g
                      transform="translate(-1512.000000, -759.000000)"
                      stroke="#FFFFFF"
                      stroke-width="2"
                    >
                      <g transform="translate(1334.000000, 742.000000)">
                        <g transform="translate(179.000000, 18.000000)">
                          <path
                            d="M5.60286131,-1.34450711 L5.60286131,12.5502297"
                            transform="translate(5.602861, 5.602861) rotate(-315.000000) translate(-5.602861, -5.602861) "
                          ></path>
                          <path
                            d="M5.60286131,-1.34450711 L5.60286131,12.5502297"
                            transform="translate(5.602861, 5.602861) rotate(-45.000000) translate(-5.602861, -5.602861) "
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  )
}

export default Industries

export const industryListingQuery = graphql`
  query industryListingEn {
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
              industryIntro {
                exampleHeading
                heading
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
