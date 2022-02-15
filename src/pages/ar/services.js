import { graphql } from "gatsby"
import React from "react"
import ServiceListingCard from "../../components/service/ServiceListingCard"
import ServicesOffered from "../../components/service/ServicesOffered"
import FooterAboveText from "../../components/shared/FooterAboveText"
import YoutubeHero from "../../components/shared/YoutubeHero"
import TextSlider from "../../components/TextSlider"
import Navbar from "../../components/Navbar"

const Service = ({ data }) => {
  const serviceData =
    data?.allStrapiServicesingle?.edges[0]?.node?.data?.attributes
      ?.localizations?.data[0]?.attributes

  console.log(serviceData?.localizations?.data[0]?.attributes, "PROPS")

  const services =
    data?.allStrapiService?.edges[0]?.node?.data[0]?.attributes?.localizations
      ?.data

  const commonSections =
    data?.allStrapiIndustrysingle?.edges[0]?.node?.data?.attributes
      ?.commonSections

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
              <YoutubeHero data={serviceData} />

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
                      <ServiceListingCard data={item} key={i} arabic={true} />
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

              <FooterAboveText arabic={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service

export const servicePageQuery = graphql`
  query serviceAr {
    allStrapiService {
      edges {
        node {
          data {
            attributes {
              slug
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
