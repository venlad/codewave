import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import ServiceListingCard from "../components/service/ServiceListingCard"
import ServicesOffered from "../components/service/ServicesOffered"
import FooterAboveText from "../components/shared/FooterAboveText"
import YoutubeHero from "../components/shared/YoutubeHero"
import TextSlider from "../components/TextSlider"
import Aos from "aos"
import LayoutWrapper from "../components/LayoutWrapper"

const Service = ({ data, location }) => {
  const serviceData =
    data?.allStrapiServicesingle?.edges[0]?.node?.data?.attributes

  const services = data?.allStrapiService?.edges[0]?.node?.data

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
      seo={serviceData?.seo}
    >
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
              <YoutubeHero data={serviceData} handleMouse={handleMouse} />

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
                handleMouse={handleMouse}
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
                handleMouse={handleMouse}
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
                handleMouse={handleMouse}
              />

              <FooterAboveText arabic={false} handleMouse={handleMouse} />
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
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
