import { Link } from "gatsby"
import React from "react"

const ServiceListingCard = ({ data, arabic }) => {
  return (
    <>
      <div
        className="col-sm-3 col-md-3 margin-left-plus-10 services-bg-hover"
        style={{ marginLeft: "10px" }}
      >
        <Link
          to={
            arabic
              ? `/ar/services/${data?.attributes?.commonSlug}`
              : `/services/${data?.attributes?.commonSlug}`
          }
        >
          <img
            src={`${data?.attributes?.thumbnail?.data?.attributes?.url}`}
            className="lazyload"
          />
          <h3
            className="title--title6"
            style={{
              marginTop: "30px",
              color: "#000",
              fontSize: "42px",
              padding: "0px 25px",
              fontWeight: "bold",
            }}
          >
            {data?.attributes?.thumbnailTitle}
            <br /> &#x27F6;
          </h3>

          <h2
            className="txt--p5"
            style={{
              color: "#000",
              padding: "0px 25px",
            }}
          >
            {data?.attributes?.thumbnailPoints?.map(item => (
              <>
                - {item?.listitems}
                <br />
              </>
            ))}
          </h2>
        </Link>
      </div>
    </>
  )
}

export default ServiceListingCard
