import React, { useEffect, useState, useRouter, useRef } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"
import { Reveal, Tween } from "react-gsap"

const Navbar = ({ arabic, handleMouse }) => {
  const data = useStaticQuery(graphql`
    {
      allStrapiNavbar {
        edges {
          node {
            data {
              attributes {
                locale
                industryListHeading
                otherLinksHeading
                serviceListHeading
                primaryRoutes {
                  link
                  text
                }
                ratings {
                  rating
                  title
                  link
                  ratImage {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                secondaryRoutes {
                  link
                  text
                }
                socialLinks {
                  link
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                localizations {
                  data {
                    attributes {
                      locale
                      industryListHeading
                      otherLinksHeading
                      serviceListHeading
                      primaryRoutes {
                        link
                        text
                      }
                      ratings {
                        rating
                        title
                        link
                        ratImage {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
                      }
                      secondaryRoutes {
                        link
                        text
                      }
                      socialLinks {
                        link
                        image {
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
            }
          }
        }
      }
      allStrapiIndustrie {
        edges {
          node {
            data {
              attributes {
                commonSlug
                menuTitle
                localizations {
                  data {
                    attributes {
                      menuTitle
                      commonSlug
                    }
                  }
                }
              }
            }
          }
        }
      }
      allStrapiService {
        edges {
          node {
            data {
              attributes {
                commonSlug
                menuTitle
                localizations {
                  data {
                    attributes {
                      menuTitle
                      commonSlug
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const industries = data?.allStrapiIndustrie?.edges[0]?.node?.data
  const services = data?.allStrapiService?.edges[0]?.node?.data
  const industriesAr =
    data?.allStrapiIndustrie?.edges[0]?.node?.data[0]?.attributes?.localizations
      ?.data
  const servicesAr =
    data?.allStrapiService?.edges[0]?.node?.data[0]?.attributes?.localizations
      ?.data
  const navData = data?.allStrapiNavbar?.edges[0]?.node?.data?.attributes
  const navDataAr =
    data?.allStrapiNavbar?.edges[0]?.node?.data?.attributes?.localizations
      ?.data[0]?.attributes

  const [open, setOpen] = useState(false)
  const [navbar, setNavbar] = useState()

  const btnRef = useRef(null)

  const menuToggle = () => {
    setOpen(!open)
  }

  useEffect(() => {
    console.log(btnRef.current, "REf")
    if (arabic) {
      setNavbar(navDataAr)
    } else {
      setNavbar(navData)
    }

    if (document) {
      if (open) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "unset"
      }
    }
  }, [open])

  return (
    <div style={{ cursor: "none" }}>
      <div
        className="logo"
        onMouseEnter={() => handleMouse(40, "")}
        onMouseLeave={() => handleMouse(12, "")}
      >
        <a
          href="#"
          onclick="window.location.href = window.location.origin;"
          className="magnetize  is-current "
        >
          <img
            width="140px"
            src="https://codewave.gumlet.io/image/upload/c_scale,w_140/v1566712787/codewave-logo-2x_tl2pvw.png?w=100&dpr=0.8"
            className="lazyload"
          />
        </a>
      </div>
      <div
        ref={btnRef}
        className="say-hello"
        onMouseEnter={() => handleMouse(40, "")}
        onMouseLeave={() => handleMouse(12, "")}
      >
        <Link to="/contact" className="magnetize">
          Contact
        </Link>
      </div>

      <div
        onMouseEnter={() => handleMouse(40, "")}
        onMouseLeave={() => handleMouse(12, "")}
        className={open ? "toggle magnetize is-open" : "toggle  magnetize"}
        onClick={menuToggle}
      >
        <p
          style={{
            marginTop: "-8px",
            marginBottom: "5px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          MENU
        </p>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="nav d-block">
        <Tween
          from={{ y: open ? "0" : "-100%" }}
          to={{ y: open ? "0" : "-100%" }}
          duration={open ? 0.5 : 2}
        >
          <div className="nav__bg nav-bg-animation"></div>
        </Tween>
        <Tween
          to={{
            opacity: open ? 1 : 0,
            y: open ? "0" : "-7%",
          }}
          duration={open ? 0.75 : 0.5}
        >
          <div className={`nav__container`}>
            <div className="logo--mobile logo--mobile--white">
              <Link to="/" data-section="0" className=" is-current ">
                <img
                  width="140px"
                  src="https://res.cloudinary.com/image/upload/c_scale,w_140/v1566712787/codewave-logo-2x_tl2pvw.png"
                  className="lazyload"
                />
              </Link>
            </div>
            <div className="nav__primary">
              <ul className="servicesUl" id="test">
                {navbar?.primaryRoutes?.map((item, i) => (
                  <li
                    style={{
                      overflow: "hidden",
                      transitionDelay: `${0.25 * i}s`,
                      transitionDuration: `${0.5 * i}s`,
                      opacity: open ? 1 : 0,
                    }}
                  >
                    <Link to={item?.link} className="" key={i}>
                      <Tween
                        to={{
                          y: open ? "0" : `-${100 * i}%`,
                          opacity: open ? 1 : 0,
                        }}
                        duration={0.5 * i}
                      >
                        <div
                          onMouseEnter={() => handleMouse(60, "")}
                          onMouseLeave={() => handleMouse(12, "")}
                        >
                          <div className="number-mask">
                            <div>0{i + 1}.</div>
                          </div>
                          {item?.text}
                        </div>
                      </Tween>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul
                className="starflex"
                style={{ marginTop: "66px" }}
                onMouseEnter={() => handleMouse(40, "")}
                onMouseLeave={() => handleMouse(12, "")}
              >
                {navbar?.ratings?.slice(0, 2)?.map((item, i) => (
                  <li
                    style={{
                      overflow: "hidden",
                      transitionDelay: `${2.3}s`,
                      transitionDuration: `${1 * i}s`,
                      opacity: open ? 1 : 0,
                      paddingBottom: "10px",
                    }}
                  >
                    <Tween
                      to={{
                        y: open ? "0" : `-${100 * i}%`,
                        opacity: open ? 1 : 0,
                      }}
                      duration={0.75 * i}
                    >
                      <a
                        href={item?.link}
                        target="_blank"
                        className="reviewMenu"
                      >
                        <span className="starText">{item?.title}</span>
                        <img
                          src={item?.ratImage?.data?.attributes?.url}
                          className="starImg"
                        />
                      </a>
                    </Tween>
                  </li>
                ))}
              </ul>
              <ul
                className="starflex"
                onMouseEnter={() => handleMouse(40, "")}
                onMouseLeave={() => handleMouse(12, "")}
              >
                {navbar?.ratings?.slice(2)?.map((item, i) => (
                  <li
                    style={{
                      overflow: "hidden",
                      transitionDelay: `${2.3}s`,
                      transitionDuration: `${1 * i}s`,
                      opacity: open ? 1 : 0,
                      paddingLeft: "25px",
                      paddingBottom: "10px",
                    }}
                  >
                    <Tween
                      to={{
                        y: open ? "0" : `-${100 * i}%`,
                        opacity: open ? 1 : 0,
                      }}
                      duration={0.75 * i}
                    >
                      <a
                        href={item?.link}
                        target="_blank"
                        className="reviewMenu"
                      >
                        <span className="starText">{item?.title}</span>
                        <img
                          src={item?.ratImage?.data?.attributes?.url}
                          className="starImg"
                        />
                      </a>
                    </Tween>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="nav__secondary"
              style={{ marginRight: "5vw", opacity: 1 }}
            >
              <h4
                className="title--title6"
                style={{
                  fontSize: "24px",
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "underline",
                }}
              >
                {navbar?.serviceListHeading}
              </h4>
              <ul>
                {(arabic ? servicesAr : services)?.map((item, i) => (
                  <li
                    style={{ opacity: 1 }}
                    onMouseEnter={() => handleMouse(40, "")}
                    onMouseLeave={() => handleMouse(12, "")}
                  >
                    <Link
                      to={
                        arabic
                          ? `/ar/services/${item?.attributes?.commonSlug}`
                          : `/services/${item?.attributes?.commonSlug}`
                      }
                    >
                      {item?.attributes?.menuTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="nav__secondary"
              style={{ marginRight: "5vw", opacity: 1 }}
            >
              <h4
                className="title--title6"
                style={{
                  fontSize: "24px",
                  color: "white",
                  marginBottom: "20px",
                  marginTop: "50px",
                  textDecoration: "underline",
                }}
              >
                {navbar?.industryListHeading}
              </h4>
              <ul>
                {(arabic ? industriesAr : industries)?.map((item, i) => (
                  <li
                    style={{ opacity: 1 }}
                    onMouseEnter={() => handleMouse(40, "")}
                    onMouseLeave={() => handleMouse(12, "")}
                  >
                    <Link
                      to={
                        arabic
                          ? `/ar/industries/${item?.attributes?.commonSlug}`
                          : `/industries/${item?.attributes?.commonSlug}`
                      }
                    >
                      {item?.attributes?.menuTitle}
                    </Link>
                  </li>
                ))}

                <li
                  style={{ opacity: 1 }}
                  onMouseEnter={() => handleMouse(40, "")}
                  onMouseLeave={() => handleMouse(12, "")}
                >
                  <a href="https://casestudies.codewave.com/category/more/">
                    More..
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="nav__secondary"
              style={{ marginRight: "5vw", opacity: 1 }}
            >
              <h4
                className="title--title6"
                style={{
                  fontSize: "24px",
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "underline",
                  marginTop: "7px",
                }}
              >
                {navbar?.otherLinksHeading}
              </h4>
              <ul>
                {navbar?.secondaryRoutes?.map((item, i) => (
                  <li
                    style={{ opacity: 1 }}
                    key={i}
                    onMouseEnter={() => handleMouse(40, "")}
                    onMouseLeave={() => handleMouse(12, "")}
                  >
                    <a href={item?.link}>{item?.text}</a>
                  </li>
                ))}

                <li
                  style={{ opacity: 1 }}
                  onMouseEnter={() => handleMouse(40, "")}
                  onMouseLeave={() => handleMouse(12, "")}
                >
                  {navbar?.socialLinks?.map((item, i) => (
                    <a
                      href={item?.link}
                      style={{ float: "left", marginLeft: `${i * 20}px` }}
                      target="_blank"
                    >
                      <img
                        src={item?.image?.data?.attributes?.url}
                        style={{ float: "left" }}
                        className="lazyload"
                      />
                    </a>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </Tween>
      </div>
    </div>
  )
}

export default Navbar
