import { graphql } from "gatsby"
import React from "react"
import ServiceListingCard from "../components/service/ServiceListingCard"
import ServicesOffered from "../components/service/ServicesOffered"
import FooterAboveText from "../components/shared/FooterAboveText"
import TextSlider from "../components/TextSlider"

const Service = ({ data }) => {
  const serviceData =
    data?.allStrapiServicesingle?.edges[0]?.node?.data?.attributes

  const services = data?.allStrapiService?.edges[0]?.node?.data

  const commonSections =
    data?.allStrapiIndustrysingle?.edges[0]?.node?.data?.attributes
      ?.commonSections

  return (
    <>
      <div id="app">
        <div className="app-container" data-namespace="about">
          <div className="content-wrapper scrollable" data-scrollbar>
            <div className="main">
              <div className="logo--mobile ">
                <a href="/" data-section="0" className=" is-current ">
                  <img
                    src="https://res.cloudinary.com/image/upload/c_scale,w_140/v1566712787/codewave-logo-2x_tl2pvw.png"
                    className="lazyload"
                  />
                </a>
              </div>
              <div className="about__top pattern-team">
                <div className="container-fluid mobile-display-none">
                  <div
                    className="row justify-content-center align-items-end  no-gutters"
                    style={{ paddingTop: "150px" }}
                  >
                    <div className="col-sm-8">
                      <a href={serviceData?.hero?.youtubeUrl} target="_blank">
                        <img
                          src={`${serviceData?.hero?.youtubeThumbnail?.data?.attributes?.url}`}
                          className="gm-loaded gm-observing gm-observing-cb"
                          className="lazyload"
                        />
                      </a>

                      <h2 className="txt--p2" style={{ marginTop: "30px" }}>
                        {serviceData?.hero?.preHeading}
                      </h2>
                      <h1 className="title--title2">
                        {serviceData?.hero?.heading}
                      </h1>
                      <br />
                      <h2 className="txt--p2">
                        <span className="yellow-bg">
                          {serviceData?.hero?.subHeading}
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
                      <a href={serviceData?.hero?.youtubeUrl} target="_blank">
                        <img
                          src={`${serviceData?.hero?.youtubeThumbnail?.data?.attributes?.url}`}
                          className="lazyload"
                        />
                      </a>
                      <h2 className="txt--p2" style={{ marginTop: "30px" }}>
                        {serviceData?.hero?.preHeading}
                      </h2>
                      <h1 className="title--title2">
                        {serviceData?.hero?.heading}
                      </h1>
                      <br />
                      <h2 className="txt--p2">
                        <span className="yellow-bg">
                          {serviceData?.hero?.subHeading}
                          &#x27F6;
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about__what">
                <div className="container-fluid">
                  <div
                    className="row no-gutters justify-content-center"
                    style={{
                      marginTop: "-80px",
                      marginBottom: "30px",
                    }}
                  >
                    {services?.map((item, i) => (
                      <ServiceListingCard data={item} key={i} />
                    ))}
                  </div>
                </div>
              </div>

              <ServicesOffered
                imgOnRight={serviceData?.servicesOffered[0]}
                imgOnLeft={serviceData?.servicesOffered[1]}
                isLeftVideo={false}
                isRightVideo={false}
                num={[1, 2]}
              />
              <TextSlider
                text={
                  "IoT - Digital Transformation - Design Thinking - Architecture"
                }
              />
              <ServicesOffered
                imgOnRight={serviceData?.servicesOffered[2]}
                imgOnLeft={serviceData?.servicesOffered[3]}
                isLeftVideo={true}
                isRightVideo={true}
                num={[3, 4]}
              />
              <TextSlider
                text={
                  "IoT - Digital Transformation - Design Thinking - Architecture"
                }
              />
              <ServicesOffered
                imgOnRight={serviceData?.servicesOffered[4]}
                imgOnLeft={serviceData?.servicesOffered[5]}
                isLeftVideo={true}
                isRightVideo={true}
                num={[5, 6]}
              />

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
                        <a href="../terms-and-conditions">
                          Terms and conditions
                        </a>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Service

export const servicePageQuery = graphql`
  query serviceEn {
    allStrapiService {
      edges {
        node {
          data {
            attributes {
              slug
              commonSlug
              thumbnailTitle
              thumbnailPoints {
                listitems
              }
              thumbnail {
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
    allStrapiServicesingle {
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
                      url
                    }
                  }
                }
              }
              locale
              servicesOffered {
                Heading
                btnText
                bgColor
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
                list {
                  listitems
                }
                preHeading
              }
              localizations {
                data {
                  attributes {
                    locale
                    hero {
                      heading
                      preHeading
                      subHeading
                      youtubeUrl
                      youtubeThumbnail {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                    }
                    servicesOffered {
                      Heading
                      btnText
                      bgColor
                      image {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                      list {
                        listitems
                      }
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
