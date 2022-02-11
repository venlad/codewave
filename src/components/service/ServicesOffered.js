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
                minHeight: "720px",
              }}
            >
              {isRightVideo ? (
                <video width="426px" autoPlay={true} muted={true} loop={true}>
                  <source
                    src={`${imgOnRight?.image?.data?.attributes?.url}`}
                    type="video/mp4"
                  />
                  Oops! Your browser does not support the video tag. Please
                  download the latest version of Chrome.
                </video>
              ) : (
                <img
                  className="img-fluid"
                  style={{ objectFit: "cover" }}
                  src={
                    imgOnRight?.image?.data?.attributes?.localFile
                      ?.childImageSharp?.fluid?.src
                  }
                  alt=""
                />
              )}
            </div>

            <div className="col-sm-1 col-md-1"></div>
            <div className="col-sm-3 col-md-4">
              <h4 className="txt--p5">
                <span className="title__number">0{num[0]}.</span>
                {imgOnRight?.preHeading}
              </h4>
              <h3 className="title--title6">{imgOnRight?.Heading}</h3>
              <ul className="txt--p5" style={{ marginTop: "0px" }}>
                {imgOnRight?.list?.map((item, i) => (
                  <li key={i}>{item?.listitems}</li>
                ))}
              </ul>

              <a href="/contact">
                <button className="download__button">
                  {imgOnRight?.btnText} &#x27F6;
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="about__why">
        <div className="container-fluid">
          <div className="row  no-gutters">
            <div className="col-sm-1 col-md-2"></div>
            <div className="col-sm-6 col-md-4">
              <h4 className="txt--p5">
                <span className="title__number">0{num[1]}.</span>
                {imgOnLeft?.preHeading}
              </h4>
              <h3 className="title--title6">{imgOnLeft?.Heading}</h3>
              <ul className="txt--p5" style={{ marginTop: "0px" }}>
                {imgOnLeft?.list?.map((item, i) => (
                  <li key={i}>{item?.listitems}</li>
                ))}
              </ul>

              <a href="/contact">
                <button className="download__button">
                  {imgOnLeft?.btnText} &#x27F6;
                </button>
              </a>
            </div>
            <div className="col-sm-1 col-md-1"></div>
            <div
              className="col-sm-4 col-md-4 "
              style={{
                backgroundColor: imgOnLeft?.bgColor,
                minHeight: "720px",
              }}
            >
              <>
                {isLeftVideo ? (
                  <video width="426px" autoPlay={true} muted={true} loop={true}>
                    <source
                      src={`${imgOnLeft?.image?.data?.attributes?.url}`}
                      type="video/mp4"
                    />
                    Oops! Your browser does not support the video tag. Please
                    download the latest version of Chrome.
                  </video>
                ) : (
                  <img
                    className="img-fluid"
                    style={{ objectFit: "cover" }}
                    src={
                      imgOnLeft?.image?.data?.attributes?.localFile
                        ?.childImageSharp?.fluid?.src
                    }
                    alt=""
                  />
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

const ImgWrapper = styled.div``
