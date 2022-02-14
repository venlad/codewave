import React from "react"
import FooterAboveText from "../components/shared/FooterAboveText"
import TextSlider from "../components/TextSlider"

const Careers = () => {
  return (
    <>
      <div id="app">
        <div className="app-container" data-namespace="about">
          <div className="content-wrapper scrollable">
            <div className="main">
              <div className="logo--mobile ">
                <a href="/" data-section="0" className=" is-current ">
                  <img
                    width="140px"
                    src="https://res.cloudinary.com/image/upload/c_scale,w_140/v1566712787/codewave-logo-2x_tl2pvw.png"
                    className="lazyload"
                  />
                </a>
              </div>
              <div className="about__top pattern-team">
                <div className="container-fluid">
                  <div className="row justify-content-center align-items-end  no-gutters">
                    <div className="col-sm-6">
                      <h2 className="txt--p2">
                        A great workplace takes you home, to your greatest self
                      </h2>
                      <h1 className="title--title2 mobile-display-none">
                        Who you are <br /> is as important as <br /> what you
                        can do.
                      </h1>
                      <h1 className="title--title2 web-display-none">
                        Who you are
                        <br /> is as important as what you can do.
                      </h1>
                      <br />
                      <br />
                      <h2 className="txt--p2">
                        <span className="yellow-bg">
                          Join our community, bring positive impact in your own
                          way &#x27F6;
                        </span>
                      </h2>
                    </div>
                    <div className="col-sm-2">
                      <a
                        className="btn btn-info btn-sm btn-hover gallerypdf"
                        href="https://res.cloudinary.com/codewave-technologies/image/upload/v1575216128/codewave-employee-handbook_qzos5o.pdf"
                      >
                        <img
                          src="https://res.cloudinary.com/image/upload/v1575217037/codewave-employee-handbook-culture-guide_ezlbao.jpg"
                          style={{ border: "5px solid #333" }}
                          alt="Codewave Employee Handbook - Culture Guide"
                          className="lazyload"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about__image1">
                <div className="container-fluid">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-sm-10">
                      <div className="img-fluid">
                        <img
                          className=" lazyload"
                          style={{ transform: "translate3d(0px, 0px, 0px)" }}
                          src="https://res.cloudinary.com/image/upload/c_scale,e_grayscale,q_auto:best,w_1000/v1563660900/Career_page_pic-min_gke8ja.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__what">
                <div className="container-fluid">
                  <div className="row no-gutters">
                    <div className="col-sm-1 col-md-1"></div>
                    <div
                      className="col-sm-4 col-md-4 careers-margin-mob-fix"
                      style={{ marginLeft: "50px" }}
                    >
                      <a href="https://www.youtube.com/watch?v=Lvw2xeEXytE&feature=youtu.be">
                        <img
                          src="https://res.cloudinary.com/image/upload/v1563366491/Influence_sjjum5.jpg"
                          className="lazyload"
                        />
                        <h3
                          className="title--title6"
                          style={{ marginTop: "30px", color: "#000" }}
                        >
                          Celebrating Influence &#x27F6;
                        </h3>

                        <h3 className="txt--p5" style={{ color: "#000" }}>
                          At Codewave, we’ve made influence a part of everyone’s
                          job.{" "}
                        </h3>
                      </a>
                    </div>
                    <div className="col-sm-1 col-md-1"></div>
                    <div
                      className="col-sm-4 col-md-4 careers-margin-mob-fix"
                      style={{ marginLeft: "10px" }}
                    >
                      <a href="https://www.youtube.com/watch?v=prSq6HbNzLQ">
                        <img
                          src="https://res.cloudinary.com/image/upload/v1563366491/authenticity_lzhtzw.jpg"
                          className="lazyload"
                        />
                        <h3
                          className="title--title6"
                          style={{ marginTop: "30px", color: "#000" }}
                        >
                          Celebrating Authenticity &#x27F6;
                        </h3>

                        <h3 className="txt--p5" style={{ color: "#000" }}>
                          Codewave takes pride in celebrating authenticity of
                          people.
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <TextSlider text={"Authenticity - Voice - Influence - Impact"} />

              <div className="about__awards">
                <div className="container-fluid">
                  <div className="row no-gutters">
                    <div className="col-sm-1 col-lg-1 col-xl-2"></div>
                    <div
                      className="col-sm-10 col-lg-10 col-xl-9 is-visible"
                      style={{ opacity: 1 }}
                    >
                      <h3 className="title--title6">Open Positions.</h3>
                    </div>
                  </div>
                </div>
                <div
                  className="container-fluid awards-list is-visible"
                  style={{
                    opacity: 1,
                    height: "675px",
                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                  }}
                >
                  <div className="row about__awards-award  no-gutters">
                    <div className="col-sm-1 col-lg-1 col-xl-2"></div>
                    <div className="col-sm-4 col-md-3 txt mobile txt--p5 ">
                      <span>Javascript devs.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 desktop">
                      <span>UX - ReactJS devs.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-3 txt txt--p5 desktop">
                      <span>UX - ReactNative devs.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-2 txt txt--p5 ">
                      <span>App - NodeJS devs.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 ">
                      <span>Tech Architects.</span>
                    </div>
                  </div>

                  <div className="row about__awards-award  no-gutters">
                    <div className="col-sm-1 col-lg-1 col-xl-2"></div>
                    <div className="col-sm-4 col-md-3 txt mobile txt--p5 ">
                      <span>Javascript devs.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 desktop">
                      <span>Serverless devs.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-3 txt txt--p5 desktop">
                      <span>AWS cloud architects.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-2 txt txt--p5 ">
                      <span>Google cloud devs.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 ">
                      <span>Analytics pros.</span>
                    </div>
                  </div>

                  <div className="row about__awards-award  no-gutters">
                    <div className="col-sm-1 col-lg-1 col-xl-2"></div>
                    <div className="col-sm-4 col-md-3 txt mobile txt--p5 ">
                      <span>Designers.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 desktop">
                      <span>Interaction Designers.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-3 txt txt--p5 desktop">
                      <span>Analysts.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-2 txt txt--p5 ">
                      <span>Engineers.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 ">
                      <span>Marketers.</span>
                    </div>
                  </div>

                  <div className="row about__awards-award  no-gutters">
                    <div className="col-sm-1 col-lg-1 col-xl-2"></div>
                    <div className="col-sm-4 col-md-3 txt mobile txt--p5 ">
                      <span>Designers.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 desktop">
                      <span>Agile-pros.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-3 txt txt--p5 desktop">
                      <span>Test-automators.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-2 txt txt--p5 ">
                      <span>Co-ordinators.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 ">
                      <span>Elaborators.</span>
                    </div>
                  </div>

                  <div className="row about__awards-award  no-gutters">
                    <div className="col-sm-1 col-lg-1 col-xl-2"></div>
                    <div className="col-sm-4 col-md-3 txt mobile txt--p5 ">
                      <span>Designers.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 desktop">
                      <span>Influencers.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-3 txt txt--p5 desktop">
                      <span>Explainers.</span>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-xl-2 txt txt--p5 ">
                      <span>Strategists.</span>
                    </div>
                    <div className="col-sm-2 col-lg-2 col-xl-2 txt txt--p5 ">
                      <span>Executioners.</span>
                    </div>
                  </div>
                </div>

                <div className="container-fluid ">
                  <div className="row no-gutters">
                    <div className="col-sm-1 col-lg-1 col-xl-2"></div>
                    <div
                      className="col-sm-15 col-lg-10 col-xl-8"
                      style={{ textAlign: "center", marginBottom: "50px" }}
                    >
                      <a href="mailto:jobs@codewave.com">
                        <button
                          className="download__button"
                          style={{ background: "#006eff", color: "white" }}
                        >
                          Apply now &#x27F6;
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about__image1">
                <div className="container-fluid">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-sm-10">
                      <div className="img-fluid">
                        <img
                          src="https://res.cloudinary.com/image/upload/e_grayscale/v1563661351/67218875_10157403009783245_8428633749419196416_n_lalotd.jpg"
                          className=" lazyload"
                          style={{ transform: "translate3d(0px, 0px, 0px)" }}
                          src="https://res.cloudinary.com/image/upload/e_grayscale/v1563661351/67218875_10157403009783245_8428633749419196416_n_lalotd.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <FooterAboveText />
            </div>
          </div>
        </div>
      </div>

      <div className="overlay"></div>
    </>
  )
}

export default Careers
