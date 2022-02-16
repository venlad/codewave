import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

const IndustryOutroText = ({ handleMouse }) => {
  const data = useStaticQuery(graphql`
    {
      allStrapiIndustrysingle {
        nodes {
          data {
            attributes {
              industryOutro {
                heading
                link
                para1
                para2
                textLink
              }
            }
          }
        }
      }
    }
  `)

  const sectionData =
    data?.allStrapiIndustrysingle?.nodes[0]?.data?.attributes?.industryOutro

  return (
    <div className="module">
      <div className="container-fluid">
        <div
          className="row no-gutters padding_on_top"
          style={{ marginTop: "-30px" }}
        >
          <div className="col-sm-2"></div>
          <div className="col-sm-5 col-md-8">
            <h3 className="title--title5">
              <span className="title__number"></span>
              {sectionData?.heading}
            </h3>

            <div className="txt--p3" style={{ marginTop: "30px" }}>
              <p>{sectionData?.para1}</p>

              <p>{sectionData?.para2}</p>

              <u
                onMouseEnter={() => handleMouse(40, "")}
                onMouseLeave={() => handleMouse(12, "")}
              >
                <Link
                  className="magnetize"
                  style={{
                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                  }}
                  to={sectionData?.link}
                >
                  {sectionData?.textLink}
                </Link>{" "}
                &#x27F6;
              </u>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndustryOutroText
