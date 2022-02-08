import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import IndustryOutroText from "../../components/industry/IndustryOutroText"
import Layout from "../../components/layout"
import Offers from "../../components/service/Offers"
import FooterAboveText from "../../components/shared/FooterAboveText"
import TextSlider from "../../components/TextSlider"

const CommonBanner = styled.div`
  background-image: ${props => `url(${props.image})`};
  background-color: ${props => props.bgcolor};
`

const IndustriesPage = ({ pageContext, data }) => {
  const industry = pageContext?.data

  return (
    <>
      <div id="app">
        <div className="app-container" data-namespace="about">
          <div className="content-wrapper scrollable" data-scrollbar>
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
              <div className="work-detail">
                <CommonBanner
                  image={`${industry?.industrybannerimg?.data?.attributes?.url}`}
                  className="module module--header"
                  bgcolor={industry?.bannerBgColor}
                  alt={
                    industry?.industrybannerimg?.data?.attributes
                      ?.alternativeText
                  }
                />
              </div>
              <div className="work-content" id="work-content">
                <div className="module module--title">
                  <div className="container-fluid">
                    <div className="row no-gutters justify-content-center">
                      <div className="col-sm-10 col-md-8">
                        <h1
                          className="title--title1 mob-title-med title--title1New"
                          style={{ fontSize: "52px" }}
                        >
                          {industry?.landingTitle1}{" "}
                          <span style={{ fontSize: "52px", color: "#b9b9b9" }}>
                            {industry?.landingTitle2}{" "}
                          </span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="module module--intro">
                <div className="container-fluid">
                  <div className="row no-gutters justify-content-center">
                    <div className="col-sm-10 col-md-8">
                      <div className="work__intro mobile-margin-fix-30">
                        <div
                          className="txt--p3"
                          dangerouslySetInnerHTML={{
                            __html: industry?.description,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Offers industry={industry} />

              <div className="module works">
                <div className="container-fluid">
                  <div className="row no-gutters justify-content-end padding_on_top ">
                    <h2
                      className="title--title4 is-visible mr_30 mb_50"
                      style={{
                        opacity: 1,
                        transform: "matrix(1, 0, 0, 1, 0, 0)",
                        marginBottom: "50px",
                        marginRight: "30px",
                      }}
                    >
                      <span className="title__number"></span>Success stories
                    </h2>
                    <div className="col-sm-1"></div>
                  </div>

                  <div className="row no-gutters padding_on_top">
                    <div className="col-sm-2"></div>
                    {industry?.successStories?.map(item => (
                      <div className="col-sm-3 col-md-3">
                        <a
                          href={item?.link}
                          target="_blank"
                          className="work-item is-visible"
                        >
                          <div className="txt--p3">
                            <img
                              className="lazyload mobcenter"
                              src={item?.storyImage?.data?.attributes?.url}
                              style={{
                                transformOrigin: "center 50% 0px",
                                transform: "matrix(1, 0, 0, 1, 0, 0)",
                              }}
                              alt="codewave agritech casestudy: clover ventures - farmer and agronomist app for tracking plant growth"
                            />
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <IndustryOutroText />
              <TextSlider text="IoT - Digital Transformation - Design Thinking - Architecture" />
              <FooterAboveText arabic={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndustriesPage
