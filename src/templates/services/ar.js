import { graphql } from "gatsby"
import React, { useState } from "react"
import SuccessStories from "../../components/service/SuccessStories"
import FooterAboveText from "../../components/shared/FooterAboveText"
import { useInView } from "react-intersection-observer"
import Navbar from "../../components/Navbar"
import CursorPointer from "../../components/cursor/CursorPointer"
import styled from "styled-components"

const Service = ({ pageContext, data }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    delay: 500,
  })

  const success = useInView({
    threshold: 0.25,
    delay: 500,
  })

  const serviceData = pageContext?.localizedData
  const commonSection =
    data?.allStrapiServicesingle?.edges[0]?.node?.data?.attributes
      ?.localizations?.data[0]?.attributes?.commonSectionTeam

  const [mouseSize, setMouseSize] = useState(12)
  const [mouseText, setMouseText] = useState("")

  const handleMouse = (size, text) => {
    setMouseSize(size)
    setMouseText(text)
  }

  return (
    <>
      <CursorPointer size={mouseSize} text={mouseText} />
      <Navbar handleMouse={handleMouse} />
      <div id="app" style={{ cursor: "none" }}>
        <div className="app-container" data-namespace="about">
          <div className="content-wrapper scrollable">
            <div className="main">
              <div
                className="work-detail"
                style={{
                  backgroundColor: inView
                    ? serviceData?.sectionBgColor
                    : "white",
                  color: inView ? "white" : "black",
                }}
              >
                <div
                  className="module module--header"
                  style={{ backgroundColor: "#ff4066" }}
                >
                  <img
                    src={`${serviceData?.hero?.bgImage?.data?.attributes?.url}`}
                    style={{ opacity: 0.3, objectFit: "contain" }}
                    className="module--header__bg lazyload"
                  />
                  <div className="module module--title">
                    <div
                      className="container-fluid"
                      style={{ marginTop: "60px" }}
                    >
                      <div className="row no-gutters justify-content-center">
                        <div className="col-sm-6 col-md-6">
                          <h1
                            className="title--title1"
                            style={{ color: "#fff" }}
                          >
                            <span style={{ whiteSpace: "nowrap" }}>
                              {serviceData?.hero?.heading
                                .split(" ")
                                .slice(
                                  0,
                                  Math.ceil(
                                    serviceData?.hero?.heading.split(" ")
                                      .length / 2
                                  )
                                )
                                .join(" ")}
                            </span>
                            <br />
                            <span style={{ color: "black" }}>
                              {serviceData?.hero?.heading
                                .split(" ")
                                .slice(
                                  Math.round(
                                    serviceData?.hero?.heading.split(" ")
                                      .length / 2
                                  )
                                )
                                .join(" ")}
                            </span>
                          </h1>
                          <picture className="img-fluid">
                            <img
                              className="lazyload"
                              src={`${serviceData?.hero?.image?.data?.attributes?.url}`}
                              style={{
                                marginTop: "185px",
                                marginLeft: "30px",
                                width: "70%",
                              }}
                            />
                          </picture>
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
                            style={{ fontSize: "80px" }}
                          >
                            {serviceData?.title}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="module module--intro">
                    <div className="container-fluid">
                      <div className="row no-gutters justify-content-center">
                        <div className="col-sm-4 col-md-3">
                          <div className="work__client txt--p5">
                            <span style={{ color: "#666" }}>
                              {serviceData?.intervention?.offerHeading}
                            </span>
                            {serviceData?.intervention?.offers?.map(
                              (item, i) => (
                                <p style={{ marginTop: "20px" }} key={i}>
                                  - {item?.listitems}
                                </p>
                              )
                            )}
                          </div>
                        </div>
                        <div className="col-sm-1 col-md-1"></div>
                        <div className="col-sm-6 col-md-3">
                          <div className="work__intro">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: serviceData?.intervention?.offeringInfo,
                              }}
                              className="txt--p3"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="module padding_on_top">
                    <picture
                      className="img-fluid"
                      style={{
                        width: "70%",
                        margin: "0 auto",
                        marginTop: "-50px",
                      }}
                    >
                      <img
                        className="mob-leads-images lazyload mob-image-small"
                        src={`${serviceData?.intervention?.image?.data?.attributes?.url}`}
                      />
                      <img
                        className="web-leads-images lazyload"
                        src={`${serviceData?.intervention?.image?.data?.attributes?.url}`}
                        style={{ width: "90%" }}
                      />
                    </picture>
                  </div>

                  <div className="module" ref={ref}>
                    <div className="container-fluid">
                      <div className="row no-gutters padding_on_top">
                        <div className="col-sm-2"></div>
                        <div
                          className="col-sm-5 col-md-8 service-markdown"
                          dangerouslySetInnerHTML={{
                            __html: serviceData?.section,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="module">
                    <div className="container-fluid">
                      <div className="row no-gutters justify-content-center">
                        <div className="col-sm-10 col-md-8">
                          <div className="img-fluid">
                            <picture className="img-fluid">
                              <img
                                className="lazyload"
                                src={`${serviceData?.phases?.data?.attributes?.url}`}
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="module">
                    <div className="container-fluid2">
                      <div className="row no-gutters">
                        <div className="col-sm-8 col-md-7">
                          <video
                            className="video-fluid"
                            autoPlay={true}
                            muted={true}
                            loop={true}
                          >
                            <source
                              src={`${serviceData?.videoSection?.video?.data?.attributes?.url}`}
                              type="video/mp4"
                            />
                            Oops! Your browser does not support the video tag.
                            Please download the latest version of Chrome.
                          </video>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="txt--p3 col-sm-3 col-md-3 mob-padding-30">
                          <br />
                          {serviceData?.videoSection?.para1} <br />
                          <br />
                          {serviceData?.videoSection?.para2}
                          <br />
                          <br />
                          <u>
                            <a
                              className="magnetize"
                              style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                              href={serviceData?.videoSection?.link}
                            >
                              {serviceData?.videoSection?.textLink}
                            </a>{" "}
                            &#x27F6;
                          </u>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="module">
                    <div className="container-fluid">
                      <div className="row no-gutters justify-content-end padding_on_top">
                        <div className="col-sm-3 col-md-5">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: commonSection?.designThinking,
                            }}
                          />
                        </div>
                        <div className="col-sm-2"></div>
                      </div>
                      <div className="row no-gutters justify-content-center">
                        <div className="col-sm-10 col-md-8 margin_on_top">
                          <div className="img-fluid">
                            <picture className="img-fluid">
                              <img
                                className="mob-leads-images lazyload mob-image-small"
                                src={`${commonSection?.team?.data?.attributes?.url}`}
                              />
                              <img
                                className="web-leads-images lazyload"
                                src={`${commonSection?.team?.data?.attributes?.url}`}
                                style={{ width: "80%", margin: "0 auto" }}
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <SucessWrapper
                    className="work-detail"
                    ref={success.ref}
                    inView={success.inView}
                  >
                    <SuccessStories
                      data={commonSection?.sucessStories}
                      handleMouse={handleMouse}
                    />
                    <SuccessStories
                      data={commonSection?.latestThinking}
                      title={"Latest Thinking"}
                      handleMouse={handleMouse}
                    />
                  </SucessWrapper>

                  <FooterAboveText arabic={true} handleMouse={handleMouse} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service

export const query = graphql`
  query serviceCommonAr {
    allStrapiServicesingle {
      edges {
        node {
          data {
            attributes {
              localizations {
                data {
                  attributes {
                    commonSectionTeam {
                      designThinking
                      team {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                      latestThinking {
                        link
                        title
                        storyImage {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
                      }
                      sucessStories {
                        link
                        title
                        storyImage {
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
    }
  }
`
const SucessWrapper = styled.div`
  background: ${props =>
    props.inView
      ? `linear-gradient(0deg, #efefef, transparent 100%) no-repeat`
      : `unset`};
  background-size: cover;
  -webkit-transition: all 1s ease-out;
  -moz-transition: all 1s ease-out;
  -o-transition: all 1s ease-out;
  transition: all 1s ease-out;
`
