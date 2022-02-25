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
            data-aos="fade-up"
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
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              color: "#000",
              padding: "0px 25px",
            }}
          >
            {data?.attributes?.thumbnailPoints?.map((item, i) => (
              <div data-aos="fade-up" key={i} data-aos-delay={200 * (i + 1)}>
                - {item?.listitems}
                <br />
              </div>
            ))}
          </h2>
        </Link>
      </div>
    </>
  )
}

export default ServiceListingCard
