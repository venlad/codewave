import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import RevealImage from "../shared/RevealImage"
import TextSlider from "../TextSlider"

const ServicesOffered = ({
  imgOnRight,
  imgOnLeft,
  isLeftVideo,
  isRightVideo,
  num,
  handleMouse,
}) => {
  return (
    <>
      <div className="about__what">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-sm-1 col-md-2"></div>

            <div
              className="col-sm-4 col-md-4 d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: imgOnRight?.bgColor,
              }}
            >
              {isRightVideo ? (
                <RevealImage>
                  <video
                    width="426px"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    style={{ margin: "0 auto" }}
                  >
                    <source
                      src={`${imgOnRight?.image?.data?.attributes?.url}`}
                      type="video/mp4"
                    />
                    Oops! Your browser does not support the video tag. Please
                    download the latest version of Chrome.
                  </video>
                </RevealImage>
              ) : (
                <RevealImage>
                  <img
                    src={
                      imgOnRight?.image?.data?.attributes?.localFile?.publicURL
                    }
                    alt=""
                  />
                </RevealImage>
              )}
            </div>

            <div className="col-sm-1 col-md-1"></div>
            <div className="col-sm-3 col-md-4">
              <h4 className="txt--p5" data-aos="fade-up">
                <span className="title__number">0{num[0]}.</span>
                {imgOnRight?.preHeading}
              </h4>
              <h3
                className="title--title6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {imgOnRight?.Heading}
              </h3>
              <ul className="txt--p5" style={{ marginTop: "0px" }}>
                {imgOnRight?.list?.map((item, i) => (
                  <li data-aos="fade-up" data-aos-delay={200 * (i + 1)} key={i}>
                    {item?.listitems}
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <button
                  className="download__button"
                  onMouseEnter={() => handleMouse(40, "")}
                  onMouseLeave={() => handleMouse(12, "")}
                  style={{ cursor: "Pointer" }}
                >
                  {imgOnRight?.btnText} &#x27F6;
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="about__why">
        <div className="container-fluid">
          <div className="row  no-gutters">
            <div className="col-sm-1 col-md-2"></div>
            <div className="col-sm-6 col-md-4">
              <h4 className="txt--p5" data-aos="fade-up">
                <span className="title__number">0{num[1]}.</span>
                {imgOnLeft?.preHeading}
              </h4>
              <h3
                className="title--title6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {imgOnLeft?.Heading}
              </h3>
              <ul className="txt--p5" style={{ marginTop: "0px" }}>
                {imgOnLeft?.list?.map((item, i) => (
                  <li data-aos="fade-up" data-aos-delay={200 * (i + 1)} key={i}>
                    {item?.listitems}
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <button
                  className="download__button"
                  onMouseEnter={() => handleMouse(40, "")}
                  onMouseLeave={() => handleMouse(12, "")}
                  style={{ cursor: "Pointer" }}
                >
                  {imgOnLeft?.btnText} &#x27F6;
                </button>
              </Link>
            </div>
            <div className="col-sm-1 col-md-1"></div>
            <div
              className="col-sm-4 col-md-4 "
              style={{
                backgroundColor: imgOnLeft?.bgColor,
              }}
            >
              <>
                {isLeftVideo ? (
                  <RevealImage>
                    <video
                      width="426px"
                      autoPlay={true}
                      muted={true}
                      loop={true}
                    >
                      <source
                        src={`${imgOnLeft?.image?.data?.attributes?.url}`}
                        type="video/mp4"
                      />
                      Oops! Your browser does not support the video tag. Please
                      download the latest version of Chrome.
                    </video>
                  </RevealImage>
                ) : (
                  <RevealImage>
                    <img
                      className="img-fluid"
                      style={{ objectFit: "cover" }}
                      src={
                        imgOnLeft?.image?.data?.attributes?.localFile?.publicURL
                      }
                      alt=""
                    />
                  </RevealImage>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesOffered
