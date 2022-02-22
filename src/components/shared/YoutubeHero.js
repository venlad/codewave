import React, { useState } from "react"
import YouTubeVideo from "./YouTubeVideo"

const YoutubeHero = ({ data, handleMouse }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <YouTubeVideo
        isOpen={isOpen}
        close={() => setOpen(false)}
        url={data?.hero?.youtubeUrl}
      />
      <div className="about__top pattern-team" style={{ cursor: "none" }}>
        <div className="container-fluid">
          <div
            className="row justify-content-center align-items-end  no-gutters"
            style={{ paddingTop: "150px" }}
          >
            <div className="col-sm-8">
              <div
                onMouseEnter={() => handleMouse(80, "WATCH")}
                onMouseLeave={() => handleMouse(12, "")}
              >
                <img
                  src={`${
                    data?.hero?.youtubeThumbnail?.data?.attributes?.localFile
                      ?.childImageSharp?.fluid?.src ||
                    data?.hero?.youtubeThumbnail?.data?.attributes?.url
                  }`}
                  onClick={() => setOpen(true)}
                  className="gm-loaded gm-observing gm-observing-cb lazyload"
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <h2
                className="txt--p2"
                style={{ marginTop: "30px" }}
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
              >
                {data?.hero?.preHeading}
              </h2>
              <h1
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-delay="200"
                className="title--title2"
              >
                {data?.hero?.heading}
              </h1>
              <br />
              <h2
                className="txt--p2"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-delay="400"
              >
                <span className="yellow-bg">
                  {data?.hero?.subHeading}
                  &#x27F6;
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default YoutubeHero
