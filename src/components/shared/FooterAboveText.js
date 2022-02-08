import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const FooterAboveText = ({ arabic, customData }) => {
  const data = useStaticQuery(graphql`
    {
      allStrapiShared {
        nodes {
          data {
            attributes {
              commonFooter {
                btnLink
                btnText
                line1
                line2
                contactImages {
                  link
                  storyImage {
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
              }
              localizations {
                data {
                  attributes {
                    commonFooter {
                      btnLink
                      btnText
                      line1
                      line2
                      contactImages {
                        link
                        storyImage {
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

  const ENcontent =
    data?.allStrapiShared?.nodes[0]?.data?.attributes?.commonFooter
  const ARcontent =
    data?.allStrapiShared?.nodes[0]?.data?.attributes?.localizations?.data[0]
      ?.attributes?.commonFooter

  const footerData = customData ? customData : arabic ? ARcontent : ENcontent

  return (
    <>
      <div className="lets-talk">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center no-gutters">
            <div className="col-sm-8">
              <h4
                className={
                  customData ? "title--title5 mob-padding-30" : "txt--p5"
                }
              >
                {footerData?.line1}
              </h4>
              <h4 className="txt--p5">{footerData?.line2}</h4>

              <Link to={footerData?.link}>
                <button className="download__button">
                  {footerData?.btnText} &#x27F6;
                </button>
              </Link>
              <br />
              <br />
              <br />
              <br />
              <br />
              <h5>
                <a href="/contact" className="title--title1">
                  Contact us
                  <svg
                    className="lets-talk__arrow"
                    viewBox="0 0 62 62"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(5.000000, 5.000000)"
                        stroke="#000000"
                        stroke-width="15"
                      >
                        <g>
                          <polyline
                            transform="translate(37.000000, 37.000000) rotate(-315.000000) translate(-37.000000, -37.000000) "
                            points="20 3 54 37 20 71"
                          ></polyline>
                          <path
                            d="M55,23.5 L-8,23.5"
                            transform="translate(23.500000, 23.500000) rotate(-315.000000) translate(-23.500000, -23.500000) "
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </h5>
            </div>
          </div>
          <div className="row justify-content-center no-gutters">
            <div
              className="col-sm-12 col-md-6 col-lg-12"
              style={{ marginTop: "45px", opacity: 0.9 }}
            >
              {footerData?.contactImages?.map((item, i) => (
                <a href={item?.link} target="_blank">
                  <img
                    style={{
                      width: "165px",
                      objectFit: "contain",
                      paddingRight: "40px",
                    }}
                    src={item?.storyImage?.data?.attributes?.url}
                    className="lazyload"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container-fluid">
          <div className="row justify-content-center no-gutters">
            <div className="col-sm-4 col-md-4 col-lg-3">
              <div className="txt--p6">© 2020 Codewave Technologies. </div>
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
    </>
  )
}

export default FooterAboveText
