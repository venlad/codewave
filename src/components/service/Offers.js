import React from "react"

const Offers = ({ industry }) => {
  return (
    <div className="module module--intro" style={{ marginTop: "-30px" }}>
      <div className="container-fluid">
        <div className="row no-gutters justify-content-center">
          <div className="col-sm-5 col-md-4">
            <div className="work__client txt--p5">
              <span className="txt--p6 normalHead{">
                {industry?.offerings?.offerHeading}
              </span>
              {industry?.offerings?.offers.map((item, i) => (
                <p className="mt_20" key={i}>
                  {item?.listitems}
                </p>
              ))}
            </div>
          </div>
          <div className="col-sm-1 col-md-1"></div>
          <div className="col-sm-6 col-md-3">
            <div className="work__intro">
              <div className="txt--p3">
                <p
                  dangerouslySetInnerHTML={{
                    __html: industry?.offerings?.offeringInfo,
                  }}
                />

                <p>
                  <img
                    src={industry?.offerings?.image?.data?.attributes?.url}
                    alt="Agritech trends and synergetic industries"
                    width="80%"
                    className="lazyload"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers
