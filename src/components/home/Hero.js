import React from "react"
import useWindowSize from "../../hooks/useWindowSize"

const Hero = () => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 767 ? (
        <div class="container-fluid desktop">
          <div class="row no-gutters justify-content-center align-items-center">
            <div class="col-sm-10">
              <h2
                class="txt--p2"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
              >
                Codewave is a{" "}
                <u>'design thinking led digital transformation'</u> company.
              </h2>
              <h1
                class="title--title2"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
                style={{
                  fontSize: "8em",
                  fontWeight: "600",
                  color: "#2b2b2b",
                }}
              >
                What you need is <br /> not design of tech, but <br />{" "}
                <span style={{ fontWeight: "600", color: "#006EFF" }}>
                  design of value.
                </span>
              </h1>
              <p
                class="title--title2"
                style={{ opacity: "0.9", marginTop: "50px" }}
              >
                <img
                  src="https://res.cloudinary.com/image/upload/v1579974653/codewave-customers-strip_tgwmhf_1_sxaobj.png"
                  class="lazyload"
                  width="80%"
                />
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div class="container-fluid mobile">
          <div class="row no-gutters  align-items-center">
            <div class="col-xs-0 col-sm-2"></div>

            <div class="col-xs-5 col-sm-6">
              <h2
                class="txt--p2"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
              >
                Codewave is a 'design thinking led digital transformation'
                company.
              </h2>
              <h1
                class="title--title2 mb_40"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                What you need is not design of tech, but{" "}
                <span style={{ color: "#EC3C63" }}>design of value.</span>
              </h1>

              <picture class="home-slide__bg-image " style={{ opacity: "0.9" }}>
                {/* <!-- <source media="(max-width:576px)" srcset="https://res.cloudinary.com/image/upload/c_scale,w_300/v1579974653/codewave-customers-strip_tgwmhf_1_sxaobj.png, https://res.cloudinary.com/image/upload/c_scale,w_450/v1579974653/codewave-customers-strip_tgwmhf_1_sxaobj.png 2x">     --> */}
                <img
                  src="https://res.cloudinary.com/image/upload/c_scale,w_300/v1579974653/codewave-customers-strip_tgwmhf_1_sxaobj.png"
                  class="lazyload mb_mob_40"
                  width="100%"
                />
              </picture>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero
