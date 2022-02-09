import React from "react"

const YoutubeHero = ({ data }) => {
  return (
    <>
      <div className="about__top pattern-team">
        <div className="container-fluid">
          <div
            className="row justify-content-center align-items-end  no-gutters"
            style={{ paddingTop: "150px" }}
          >
            <div className="col-sm-8">
              <a href={data?.hero?.youtubeUrl} target="_blank">
                <img
                  src={`${
                    data?.hero?.youtubeThumbnail?.data?.attributes?.localFile
                      ?.childImageSharp?.fluid?.src ||
                    data?.hero?.youtubeThumbnail?.data?.attributes?.url
                  }`}
                  className="gm-loaded gm-observing gm-observing-cb lazyload"
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    objectFit: "contain",
                  }}
                />
              </a>

              <h2 className="txt--p2" style={{ marginTop: "30px" }}>
                {data?.hero?.preHeading}
              </h2>
              <h1 className="title--title2">{data?.hero?.heading}</h1>
              <br />
              <h2 className="txt--p2">
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
