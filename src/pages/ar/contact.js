import Aos from "aos"
import { Link, graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import ContactHeroBanner from "../../components/contact/ContactHeroBanner"
import LayoutWrapper from "../../components/LayoutWrapper"
import GatsbyImageReveal from "../../components/shared/GatsbyImageReveal"

const Contact = ({ data, location }) => {
  const contact =
    data?.allStrapiContact?.edges[0]?.node?.data?.attributes?.localizations
      ?.data[0]?.attributes

  const contacts = contact?.contacts

  const lastContacts = contacts.slice(-2)

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
      seo={contact?.seo}
    >
      <div id="app">
        <div className="app-container" data-namespace="contact">
          <div className="content-wrapper scrollable">
            <div className="main contact">
              <div className="logo--mobile ">
                <a href="/" data-section="0" className=" is-current ">
                  <img
                    width="140px"
                    src="https://res.cloudinary.com/image/upload/c_scale,w_140/v1566712787/codewave-logo-2x_tl2pvw.png"
                    className="lazyload"
                  />
                </a>
              </div>
              <ContactHeroBanner contact={contact} />

              <div className="container-fluid">
                <div className="row contact__bottom justify-content-center  no-gutters">
                  <div className="col-sm-10 col-md-10 col-lg-8">
                    {contacts?.map((item, i) => (
                      <div
                        key={i}
                        className="contact__email margin-mobile-30"
                        style={{ marginTop: "-50px" }}
                      >
                        <h1>
                          <div
                            className="txt--p6"
                            data-aos="fade-up"
                            data-aos-delay={(i + 1) * 100}
                          >
                            <span className="yellow-bg">{item?.heading}</span>
                          </div>
                        </h1>
                        <div
                          data-aos="fade-up"
                          data-aos-delay={(i + 1) * 150}
                          className="txt--p3"
                          dangerouslySetInnerHTML={{
                            __html: item?.contactInfo,
                          }}
                        />
                        {item?.telephone?.map((sub, idx) => (
                          <div
                            key={idx}
                            className="txt--p3"
                            data-aos="fade-up"
                            data-aos-delay={(i + idx) * 200}
                          >
                            <br /> Tel.{" "}
                            <Link
                              style={{ textDecoration: "underline" }}
                              to={sub?.link}
                            >
                              {sub?.text}
                            </Link>
                          </div>
                        ))}
                      </div>
                    ))}
                    <div className="about__why margin-left-mobile-25">
                      <div className="container-fluid">
                        <div className="row  no-gutters">
                          <div className="col-sm-6 col-md-4">
                            {lastContacts?.map((item, i) => (
                              <div className="contact__address" key={i}>
                                <div className="txt--p6 ">
                                  <span
                                    className="yellow-bg"
                                    data-aos="fade-up"
                                    data-aos-delay={(i + 1) * 100}
                                  >
                                    {item?.heading}
                                  </span>
                                </div>
                                <div
                                  data-aos="fade-up"
                                  data-aos-delay={(i + 1) * 150}
                                  className="txt--p3"
                                  dangerouslySetInnerHTML={{
                                    __html: item?.contactInfo,
                                  }}
                                />
                                {item?.telephone?.map((sub, idx) => (
                                  <div
                                    key={idx}
                                    className="txt--p3"
                                    data-aos="fade-up"
                                    data-aos-delay={(i + idx) * 200}
                                  >
                                    <br /> Tel.{" "}
                                    <Link
                                      style={{ textDecoration: "underline" }}
                                      to={sub?.link}
                                    >
                                      {sub?.text}
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                          <div className="col-sm-2 col-md-2"></div>
                          <div className="col-sm-3 col-md-3">
                            <a
                              target="_blank"
                              href="https://www.google.com/maps/place/Codewave+-+Digital+Strategy,+User+Experience+Design,+Technology+Development/@12.9222831,77.5558296,17z/data=!4m12!1m6!3m5!1s0x3bae1410cbe3d455:0x24ccaa47ae085263!2sCodewave+-+Digital+Strategy,+User+Experience+Design,+Technology+Development!8m2!3d12.9222831!4d77.5580183!3m4!1s0x3bae1410cbe3d455:0x24ccaa47ae085263!8m2!3d12.9222831!4d77.5580183"
                            >
                              <div
                                className="img-fluid"
                                style={{ width: "300px", height: "346px" }}
                              >
                                <GatsbyImageReveal
                                  src={
                                    contact?.map?.data?.attributes?.localFile
                                  }
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact__social">
                      <div>
                        <div className="txt--p6">Follow us</div>
                      </div>
                      <div className="contact__social-links">
                        {contact?.followUs?.map((item, i) => (
                          <div className="txt--p3" key={i}>
                            <a
                              href={item?.link}
                              target="_blank"
                              onMouseEnter={() => handleMouse(40, "")}
                              onMouseLeave={() => handleMouse(12, "")}
                            >
                              {item?.text}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer">
              <div className="container-fluid">
                <div className="row justify-content-center no-gutters">
                  <div
                    className="col-sm-12 col-md-12 col-lg-12"
                    style={{ opacity: 0.9, margin: "35px 0px" }}
                  >
                    {contact?.footerImages?.map((item, i) => (
                      <a key={i} href={item?.link} target="_blank">
                        <img
                          style={{ paddingRight: "20px", width: "165px" }}
                          src={
                            item?.image?.data?.attributes?.localFile
                              ?.childImageSharp?.fluid?.src ||
                            item?.image?.data?.attributes?.url
                          }
                          className="lazyload"
                        />
                      </a>
                    ))}
                  </div>
                </div>
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
                      <a href="./terms-and-conditions">Terms and conditions</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default Contact

export const query = graphql`
  query contactAr {
    allStrapiContact {
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
                    contacts {
                      heading
                      contactInfo
                      telephone {
                        link
                        text
                      }
                    }
                    followUs {
                      link
                      text
                    }
                    footerImages {
                      image {
                        data {
                          attributes {
                            localFile {
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
                      link
                    }
                    gMapLink
                    heroBgLarge {
                      data {
                        attributes {
                          localFile {
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
                    heroBgSmall {
                      data {
                        attributes {
                          localFile {
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
                    map {
                      data {
                        attributes {
                          localFile {
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
                }
              }
            }
          }
        }
      }
    }
  }
`
