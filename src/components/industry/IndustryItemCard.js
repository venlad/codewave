import { Link } from "gatsby"
import React from "react"

const IndustryItemCard = ({ data, arabic }) => {
  return (
    <>
      <div
        className="col-sm-3 col-md-3"
        style={{ marginLeft: "10px", marginBottom: "30px" }}
        data-cursor-type="medium"
        data-cursor-text="watch"
      >
        <Link
          data-cursor-type="medium"
          data-cursor-text=""
          to={
            arabic
              ? `/ar/industries/${data?.attributes?.commonSlug}`
              : `/industries/${data?.attributes?.commonSlug}`
          }
        >
          <img
            src={data?.attributes?.industrylistimg?.data?.attributes?.url}
            className="lazyload"
            style={{
              objectFit: "contain",
              width: "100%",
              objectPosition: "top",
            }}
          />
          <h3
            className="title--title6"
            style={{ marginTop: "30px", color: "#000" }}
          >
            {data?.attributes?.title} &#x27F6;
          </h3>

          <h3
            className="txt--p5"
            style={{ color: "#000", marginBottom: "30px" }}
          >
            {data?.attributes?.smallDescription}{" "}
          </h3>
        </Link>
      </div>
    </>
  )
}

export default IndustryItemCard
