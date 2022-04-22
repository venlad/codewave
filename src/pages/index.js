import React, { useEffect, useState } from "react"

import Hero from "../components/home/Hero"
import CursorPointer from "../components/cursor/CursorPointer"
import Navbar from "../components/Navbar"

// markup
const IndexPage = () => {
  const [mouseSize, setMouseSize] = useState(12)
  const [mouseText, setMouseText] = useState("")

  const handleMouse = (size, text) => {
    setMouseSize(size)
    setMouseText(text)
  }

  return (
    <>
      <CursorPointer size={mouseSize} text={mouseText} />
      <Navbar handleMouse={handleMouse} />
      <div id="app">
        <div className="app-container">
          <div className="content-wrapper home">
            <div className="logo--mobile logo--mobile--black">
              <a href="/" className=" is-current ">
                <img
                  src="https://res.cloudinary.com/image/upload/c_scale,w_140/codewave-logo-2x_tl2pvw.png"
                  className="lazyload"
                />
              </a>
            </div>
            <div className="main">
              <div className="home-slide home-slide--intro is-active pattern-home">
                <div className="container-fluid desktop">
                  <div className="row no-gutters justify-content-center align-items-center">
                    <div className="col-sm-10">
                      <h2 className="txt--p2">
                        Codewave is a{" "}
                        <u>'design thinking led digital transformation'</u>{" "}
                        company.
                      </h2>
                      <h1
                        class
                        style={{
                          fontSize: "8em",
                          fontWeight: "600",
                          color: "#2b2b2b",
                        }}
                      >
                        What you need is <br /> not design of tech, but <br />{" "}
                        <span
                          style={{
                            fontWeight: "600",
                            color: "#006EFF",
                          }}
                        >
                          design of value.
                        </span>
                      </h1>
                      <p
                        className="title--title2"
                        style={{ opacity: "0.9", marginTop: "50px" }}
                      >
                        <img
                          src="https://res.cloudinary.com/image/upload/v1579974653/codewave-customers-strip_tgwmhf_1_sxaobj.png"
                          className="lazyload"
                          width="80%"
                        />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="container-fluid mobile">
                  <div className="row no-gutters  align-items-center">
                    <div className="col-xs-0 col-sm-2"></div>

                    <div className="col-xs-5 col-sm-6">
                      <h2 className="txt--p2">
                        Codewave is a 'design thinking led digital
                        transformation' company.
                      </h2>
                      <h1
                        className="title--title2"
                        style={{ marginBottom: "40px", color: "#EC3C63" }}
                      >
                        What you need is not design of tech, but{" "}
                        <span>design of value.</span>
                      </h1>

                      <picture
                        className="home-slide__bg-image"
                        style={{ opacity: 0.9 }}
                      >
                        <img
                          src="https://res.cloudinary.com/image/upload/c_scale,w_300/v1579974653/codewave-customers-strip_tgwmhf_1_sxaobj.png"
                          className="lazyload"
                          width="100%"
                        />
                      </picture>
                    </div>
                  </div>
                </div>

                <div className="breadcrumb">
                  <a href="/" className="explore magnetize">
                    <svg
                      width="12px"
                      height="109px"
                      viewBox="0 0 12 109"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g transform="translate(-1612.000000, -877.000000)">
                          <rect
                            fill="#FFFFFF"
                            x="1612"
                            y="877"
                            width="12"
                            height="108"
                          ></rect>
                          <path
                            d="M1605.02,896.204 L1603.34,897.276 C1602.908,896.444 1602.444,896.092 1601.788,896.092 C1601.18,896.092 1600.716,896.524 1600.716,897.116 C1600.716,899.068 1605.5,898.812 1605.5,902.14 C1605.5,904.332 1604.06,905.628 1601.916,905.628 C1599.884,905.628 1598.412,904.204 1598.06,902.492 L1599.74,901.436 C1600.076,902.636 1600.748,903.708 1601.964,903.708 C1602.828,903.708 1603.42,903.276 1603.42,902.252 C1603.42,900.396 1598.732,900.764 1598.732,897.212 C1598.732,895.516 1600.028,894.172 1601.788,894.172 C1603.276,894.172 1604.412,894.908 1605.02,896.204 Z M1612.65022,902.604 L1614.42622,903.324 C1613.81822,904.844 1612.55422,905.628 1610.76222,905.628 C1608.13822,905.628 1606.82622,903.74 1606.82622,901.468 C1606.82622,899.196 1608.13822,897.308 1610.76222,897.308 C1612.55422,897.308 1613.81822,898.092 1614.42622,899.612 L1612.65022,900.332 C1612.23422,899.484 1611.65822,899.004 1610.76222,899.004 C1609.51422,899.004 1608.90622,900.044 1608.90622,901.468 C1608.90622,902.892 1609.51422,903.932 1610.76222,903.932 C1611.65822,903.932 1612.23422,903.452 1612.65022,902.604 Z M1617.83244,905.5 L1615.84844,905.5 L1615.84844,897.436 L1617.83244,897.436 L1617.83244,898.748 C1618.40844,897.804 1619.30444,897.308 1620.21644,897.308 C1620.56844,897.308 1620.87244,897.372 1621.19244,897.468 L1620.82444,899.308 C1620.58444,899.164 1620.32844,899.084 1619.99244,899.084 C1618.84044,899.084 1617.83244,900.028 1617.83244,902.636 L1617.83244,905.5 Z M1621.86267,901.468 C1621.86267,899.132 1623.36667,897.308 1625.95867,897.308 C1628.55067,897.308 1630.05467,899.132 1630.05467,901.468 C1630.05467,903.804 1628.55067,905.628 1625.95867,905.628 C1623.36667,905.628 1621.86267,903.804 1621.86267,901.468 Z M1623.94267,901.468 C1623.94267,902.796 1624.67867,903.932 1625.95867,903.932 C1627.23867,903.932 1627.97467,902.796 1627.97467,901.468 C1627.97467,900.14 1627.23867,899.004 1625.95867,899.004 C1624.67867,899.004 1623.94267,900.14 1623.94267,901.468 Z M1631.74889,894.172 L1633.73289,894.172 L1633.73289,905.5 L1631.74889,905.5 L1631.74889,894.172 Z M1635.49111,894.172 L1637.47511,894.172 L1637.47511,905.5 L1635.49111,905.5 L1635.49111,894.172 Z"
                            className="fill"
                            fill="#000000"
                            fill-rule="nonzero"
                            transform="translate(1617.767556, 899.900000) rotate(-90.000000) translate(-1617.767556, -899.900000) "
                          ></path>
                          <polygon
                            className="fill"
                            fill="#000000"
                            fill-rule="nonzero"
                            transform="translate(1618.589844, 963.500000) rotate(-90.000000) translate(-1618.589844, -963.500000) "
                            points="1639.17969 963 1639.17969 964 1598 964 1598 963"
                          ></polygon>
                          <path
                            d="M1619.00797,984.300866 L1618.29605,984.305744 L1618.64954,983.942433 L1619.00797,984.300866 Z M1620.8787,981.651325 L1621.59543,982.348675 L1618.6593,985.366405 L1615.64645,982.353553 L1616.35355,981.646447 L1618.64954,983.942433 L1620.8787,981.651325 Z"
                            className="fill"
                            fill="#000000"
                            fill-rule="nonzero"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="home-slides">
                <div className="home-slide">
                  <a target="_blank" href="/services/">
                    <div className="home-slide__left">
                      <div className="home-slide__left-mask">
                        <div
                          className="home-slide__bg lazyload"
                          style={{
                            backgroundImage: `url(${"https://res.cloudinary.com/codewave-technologies/image/upload/c_scale,h_480,q_85/v1606745907/Banner-office-vibe-clutch-banner-top-app-development-company_mhqtrk.jpg"})`,
                            backgroundSize: "contain !important",
                          }}
                        ></div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="home-slide__subtitle global-impact-mobile"
                    style={{
                      width: "35%",
                      marginTop: "-80px",
                      marginLeft: "-80px",
                    }}
                  >
                    <h1 className="txt--global">Global Impact</h1>
                    <h4 className="txt--p5">
                      Our{" "}
                      <span style={{ textDecoration: "underline" }}>
                        'design thinking led digitization'
                      </span>{" "}
                      practice has touched and transformed businesses globally -
                      Startups, SMEs and Corporations alike. Journey with our
                      customers are carefully designed for need identification,
                      challenge articulation, vision / strategic alignment,
                      progressive elaboration and agile execution. <br />
                      <br />
                    </h4>

                    <div>
                      <img
                        src="https://res.cloudinary.com/codewave-technologies/image/upload/v1608967260/Awards-strip-2x-crisp_lwbym3.png"
                        className="lazyload mob-100-width"
                        alt="codewave - awards, award winning design thinking led digital transformation company from bangalore, India"
                        className="lazyload"
                        style={{ marginLeft: "-25px", width: "100%" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="home-slide">
                  <a href="https://toppscholars.com" target="_blank">
                    <div className="home-slide__left">
                      <div className="home-slide__left-mask">
                        <div
                          className="home-slide__bg lazyload"
                          style={{
                            backgroundImage: `url(${"https://res.cloudinary.com/codewave-technologies/image/upload/codewave-website/uploads/home/toppscholars-bg.svg"})`,
                          }}
                        >
                          <svg
                            className="home-slide__big-shape"
                            viewBox="0 0 250 502"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              transform: "translate(0%, 0%) rotate(0deg)",
                            }}
                          >
                            <g
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <g
                                transform="translate(-118.000000, -35.000000)"
                                fill="#07145F"
                              >
                                <path
                                  d="M242.829132,160.970868 L493.629132,160.970868 C493.629132,298.85332 381.342147,410.629132 242.829132,410.629132 C104.316116,410.629132 -7.97086835,298.85332 -7.97086835,160.970868 L242.829132,160.970868 Z"
                                  id="Combined-Shape-Copy-12"
                                  transform="translate(242.829132, 285.800000) scale(-1, 1) rotate(90.000000) translate(-242.829132, -285.800000) "
                                ></path>
                              </g>
                            </g>
                          </svg>

                          <picture className="home-slide__bg-image">
                            <img
                              src="https://res.cloudinary.com/image/upload/codewave-website/uploads/home/topp1.png"
                              className="lazyload"
                            />
                          </picture>
                        </div>
                        <div className="home-slide__title">
                          <h3 className="title--title3 m-b-0 home-slide__title-mask">
                            Online Adaptive
                            <br />
                            Learning. <br />
                            <span
                              className="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                              style={{
                                fontSize: "32px",
                                background: "#000",
                                color: "white",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                              }}
                            >
                              Live: 100k requests served daily
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="home-slide__subtitle">
                      <h4 className="txt--p5">
                        <span>Web, Android and iOS applications </span>
                        <span>EdTech</span>
                      </h4>
                    </div>
                    <div className="home-slide__title">
                      <h3 className="title--title3 m-b-0 home-slide__title-nomask">
                        Online Adaptive
                        <br />
                        Learning. <br />
                        <span
                          className="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                          style={{
                            fontSize: "32px",
                            background: "#000",
                            color: "white",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                          }}
                        >
                          Live: 100k requests served daily
                        </span>
                      </h3>
                    </div>
                  </a>
                </div>
                <div className="home-slide">
                  <a
                    href="https://casestudies.codewave.com/design-and-development-of-ride-sharing-app-uber-for-x/"
                    target="_blank"
                  >
                    <div className="home-slide__left">
                      <div className="home-slide__left-mask">
                        <div
                          className="home-slide__bg lazyload"
                          style={{
                            backgroundImage: `url(${"https://res.cloudinary.com/codewave-technologies/image/upload/c_scale,w_395/v1579975176/vroom-bg_p4zf7g.png"})`,
                          }}
                        >
                          <svg
                            className="home-slide__big-shape"
                            viewBox="0 0 250 502"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              transform: "translate(28%, -10%) rotate(45deg)",
                            }}
                          >
                            <g
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <g
                                transform="translate(-118.000000, -35.000000)"
                                fill="#333"
                              >
                                <path
                                  d="M242.829132,160.970868 L493.629132,160.970868 C493.629132,298.85332 381.342147,410.629132 242.829132,410.629132 C104.316116,410.629132 -7.97086835,298.85332 -7.97086835,160.970868 L242.829132,160.970868 Z"
                                  id="Combined-Shape-Copy-12"
                                  transform="translate(242.829132, 285.800000) scale(-1, 1) rotate(90.000000) translate(-242.829132, -285.800000) "
                                ></path>
                              </g>
                            </g>
                          </svg>

                          <picture className="home-slide__bg-image">
                            <img
                              src="https://res.cloudinary.com/image/upload/codewave-website/uploads/home/vroom-mobile-app-codewave-case-studies.png"
                              className="lazyload"
                            />
                          </picture>
                        </div>
                        <div className="home-slide__title">
                          <h3 className="title--title3 m-b-0 home-slide__title-mask">
                            Peer to peer
                            <br />
                            ride sharing.
                            <br />
                            <span
                              className="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                              style={{
                                fontSize: "32px",
                                background: "#000",
                                color: "white",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                              }}
                            >
                              Launched, scaled to 500k+ users{" "}
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="home-slide__subtitle">
                      <h4 className="txt--p5">
                        <span>Ride sharing, HyperLocal delivery</span>
                        <span>Transportation</span>
                      </h4>
                    </div>
                    <div className="home-slide__title">
                      <h3 className="title--title3 m-b-0 home-slide__title-nomask">
                        Peer to peer
                        <br />
                        ride sharing.
                        <br />
                        <span
                          className="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                          style={{
                            fontSize: "32px",
                            background: "#000",
                            color: "white",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                          }}
                        >
                          Launched, scaled to 500k+ users
                        </span>
                      </h3>
                    </div>
                  </a>
                </div>
                <div className="home-slide">
                  <a href="https://finzy.com" target="_blank">
                    <div className="home-slide__left">
                      <div className="home-slide__left-mask">
                        <div
                          className="home-slide__bg lazyload"
                          style={{
                            backgroundImage: `url(${"https://res.cloudinary.com/codewave-technologies/image/upload/codewave-website/uploads/home/finzy-codewave-case-studies-bg.svg"})`,
                          }}
                        >
                          <svg
                            className="home-slide__big-shape"
                            viewBox="0 0 250 502"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              transform: "translate(75%, -5%) rotate(150deg)",
                            }}
                          >
                            <g
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <g
                                transform="translate(-118.000000, -35.000000)"
                                fill="#facc48"
                              >
                                <path
                                  d="M242.829132,160.970868 L493.629132,160.970868 C493.629132,298.85332 381.342147,410.629132 242.829132,410.629132 C104.316116,410.629132 -7.97086835,298.85332 -7.97086835,160.970868 L242.829132,160.970868 Z"
                                  id="Combined-Shape-Copy-12"
                                  transform="translate(242.829132, 285.800000) scale(-1, 1) rotate(90.000000) translate(-242.829132, -285.800000) "
                                ></path>
                              </g>
                            </g>
                          </svg>

                          <picture className="home-slide__bg-image">
                            <img
                              src="https://res.cloudinary.com/image/upload/codewave-website/uploads/home/finzy-p2p-lending-marketplace-built-by-codewave.png"
                              className="lazyload"
                            />
                          </picture>
                        </div>
                        <div className="home-slide__title">
                          <h3 className="title--title3 m-b-0 home-slide__title-mask">
                            Peer to peer
                            <br />
                            lending.
                            <br />
                            <span
                              className="title--title3 m-b-0 home-slide__title-mask  home-black-sec-bg-mobile"
                              style={{
                                fontSize: "32px",
                                background: "#000",
                                color: "white",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                              }}
                            >
                              Loans $1mn+/yr, automated lending
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="home-slide__subtitle">
                      <h4 className="txt--p5">
                        <span>Alternate financing, Smart Online Lending</span>
                        <span>Fintech</span>
                      </h4>
                    </div>
                    <div className="home-slide__title">
                      <h3 className="title--title3 m-b-0 home-slide__title-nomask">
                        Peer to peer
                        <br />
                        lending.
                        <br />
                        <span
                          className="title--title3 m-b-0 home-slide__title-mask  home-black-sec-bg-mobile"
                          style={{
                            fontSize: "32px",
                            background: "#000",
                            color: "white",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                          }}
                        >
                          Loans $1mn+/yr, automated lending
                        </span>
                      </h3>
                    </div>
                  </a>
                </div>
                <div className="home-slide">
                  <a href="https://www.sana.io" target="_blank">
                    <div className="home-slide__left">
                      <div className="home-slide__left-mask">
                        <div
                          className="home-slide__bg lazyload"
                          style={{
                            backgroundImage: `url(${"https://res.cloudinary.com/codewave-technologies/image/upload/w_395/v1576956235/sana-smart-mask-codewave-case-study-iot_oreflx_1aff894b5a0261a30da05e77b36f0e92_tc4kck.jpg"})`,
                          }}
                        >
                          <svg
                            className="home-slide__big-shape"
                            viewBox="0 0 250 502"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              transform: "translate(64%, -3%) rotate(180deg)",
                            }}
                          >
                            <g
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <g
                                transform="translate(-118.000000, -35.000000)"
                                fill="rgba(255, 255, 255, 0.3)"
                              >
                                <path
                                  d="M242.829132,160.970868 L493.629132,160.970868 C493.629132,298.85332 381.342147,410.629132 242.829132,410.629132 C104.316116,410.629132 -7.97086835,298.85332 -7.97086835,160.970868 L242.829132,160.970868 Z"
                                  id="Combined-Shape-Copy-12"
                                  transform="translate(242.829132, 285.800000) scale(-1, 1) rotate(90.000000) translate(-242.829132, -285.800000) "
                                ></path>
                              </g>
                            </g>
                          </svg>

                          <picture className="home-slide__bg-image">
                            <img
                              src="https://res.cloudinary.com/image/upload/v1564456953/sana-app-codewave-case-studies_ygme1u.png"
                              className="lazyload"
                            />
                          </picture>
                        </div>
                        <div className="home-slide__title">
                          <h3 className="title--title3 m-b-0 home-slide__title-mask">
                            Smart <br />
                            Sensing tech. <br />
                            <span
                              className="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                              style={{
                                fontSize: "32px",
                                background: "#000",
                                color: "white",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                              }}
                            >
                              In trial: 200 users for FDA approval
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="home-slide__subtitle">
                      <h4 className="txt--p5">
                        <span>Tablet application</span>{" "}
                        <span>Healthcare, IoT</span>
                      </h4>
                    </div>
                    <div className="home-slide__title">
                      <h3 className="title--title3 m-b-0 home-slide__title-nomask">
                        Smart
                        <br />
                        Sensing tech. <br />
                        <span
                          className="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                          style={{
                            fontSize: "32px",
                            background: "#000",
                            color: "white",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                          }}
                        >
                          In trial: 200 users for FDA approval
                        </span>
                      </h3>
                    </div>
                  </a>
                </div>

                <div className="home-slide">
                  <a
                    href="https://casestudies.codewave.com/making-baby-warmers-smarter/"
                    target="_blank"
                  >
                    <div className="home-slide__left">
                      <div className="home-slide__left-mask">
                        <div
                          className="home-slide__bg lazyload"
                          style={{
                            backgroundImage: `url(${"https://res.cloudinary.com/codewave-technologies/image/upload/w_395/v1564456316/embrance-smart-baby-warmer-iot-codewave-casestudy_zzy71r.jpg"})`,
                          }}
                        >
                          <svg
                            className="home-slide__big-shape"
                            viewBox="0 0 250 502"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              transform: "translate(64%, -3%) rotate(180deg)",
                            }}
                          >
                            <g
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <g
                                transform="translate(-118.000000, -35.000000)"
                                fill="rgba(255, 238, 181, 0.2)"
                              >
                                <path
                                  d="M242.829132,160.970868 L493.629132,160.970868 C493.629132,298.85332 381.342147,410.629132 242.829132,410.629132 C104.316116,410.629132 -7.97086835,298.85332 -7.97086835,160.970868 L242.829132,160.970868 Z"
                                  id="Combined-Shape-Copy-12"
                                  transform="translate(242.829132, 285.800000) scale(-1, 1) rotate(90.000000) translate(-242.829132, -285.800000) "
                                ></path>
                              </g>
                            </g>
                          </svg>

                          <picture className="home-slide__bg-image">
                            <source
                              media="(min-width: 1441px)"
                              srcset="https://res.cloudinary.com/image/upload/codewave-website/uploads/home/embrace.png, uploads/home/embrace.png 2x"
                            />
                            <source
                              media="(min-width:1281px) and (max-width: 1640px)"
                              srcset="uploads/home/embrace.png, uploads/home/embrace.png 2x"
                            />
                            <source
                              media="(min-width:1025px) and (max-width: 1280px)"
                              srcset="uploads/home/embrace.png, uploads/home/embrace.png 2x"
                            />
                            <source
                              media="(min-width:577px) and (max-width: 1024px)"
                              srcset="uploads/home/embrace.png, uploads/home/embrace.png 2x"
                            />
                            <source
                              media="(max-width:576px)"
                              srcset="uploads/home/embrace.png, uploads/home/embrace.png 2x"
                            />
                            <img
                              src="https://res.cloudinary.com/image/upload/codewave-website/uploads/home/embrace.png"
                              className="lazyload"
                            />
                          </picture>
                        </div>
                        <div className="home-slide__title">
                          <h3 className="title--title3 m-b-0 home-slide__title-mask">
                            Internet of <br /> medical things. <br />
                            <span
                              className="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                              style={{
                                fontSize: "32px",
                                background: "#000",
                                color: "white",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                              }}
                            >
                              300k+ babies served in 22 countries
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="home-slide__subtitle">
                      <h4 className="txt--p5">
                        <span>Edge, Cloud based apps</span>{" "}
                        <span>Healthcare, IoT</span>
                      </h4>
                    </div>
                    <div className="home-slide__title">
                      <h3 className="title--title3 m-b-0 home-slide__title-nomask">
                        Internet of
                        <br />
                        medical things. <br />
                        <span
                          className="title--title3 m-b-0 home-slide__title-mask home-black-sec-bg-mobile"
                          style={{
                            fontSize: "32px",
                            background: "#000",
                            color: "white",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                          }}
                        >
                          300k+ babies served in 22 countries
                        </span>
                      </h3>
                    </div>
                  </a>
                </div>

                <div className="home-shape">
                  <div>
                    <div>
                      <div>
                        <svg
                          viewBox="0 0 250 502"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-118.000000, -35.000000)"
                              fill="#ffeeb5"
                            >
                              <path
                                d="M242.829132,160.970868 L493.629132,160.970868 C493.629132,298.85332 381.342147,410.629132 242.829132,410.629132 C104.316116,410.629132 -7.97086835,298.85332 -7.97086835,160.970868 L242.829132,160.970868 Z"
                                id="Combined-Shape-Copy-12"
                                transform="translate(242.829132, 285.800000) scale(-1, 1) rotate(90.000000) translate(-242.829132, -285.800000) "
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pagination">
                  <div className="pagination__number pagination__number--first">
                    01.
                  </div>
                  <div className="pagination__bar-wrapper">
                    <div className="pagination__bar"></div>
                  </div>
                  <div className="pagination__number pagination__number--last">
                    06.
                  </div>
                </div>
              </div>
            </div>
            <div className="home-slide home-slide--end">
              <div>
                <a
                  style={{ marginTop: "-60px" }}
                  target="_blank"
                  href="https://casestudies.codewave.com"
                  className="title--title1"
                >
                  View more<span>work</span>.
                  <svg
                    viewBox="0 0 62 62"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(5.000000, 5.000000)"
                        stroke="#FFFFFF"
                        stroke-width="15"
                      >
                        <g>
                          <polyline
                            transform="translate(37.000000, 37.000000) rotate(-315.000000) translate(-37.000000, -37.000000) "
                            points="20 3 54 37 20 71"
                          ></polyline>
                          <path
                            d="M55,23.5 L-8,23.5"
                            transform="translate(23.500000, 23.500000) rotate(-315.000000) translate(-23.500000, -23.500000) "
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>

              <div className="footer">
                <div className="container-fluid">
                  <div className="row justify-content-center no-gutters">
                    <div
                      className="col-sm-12 col-md-12 col-lg-12"
                      style={{
                        opacity: "0.9",
                        marginTop: "15px",
                        marginBottom: "30px",
                      }}
                    >
                      <a
                        href="https://clutch.co/profile/codewave-technologies#review-130383"
                        target="_blank"
                      >
                        <img
                          style={{ paddingRight: "40px" }}
                          src="https://res.cloudinary.com/image/upload/c_scale,w_120/v1563693063/developers_india_2019_o5ouk1.png"
                          className="lazyload"
                        />
                      </a>
                      <a
                        href="https://www.accesswire.com/432215/Codewave-Wins-the-Red-Herring-Top-100-Asia-Award-2015"
                        target="_blank"
                      >
                        <img
                          style={{ paddingRight: "20px", marginTop: "10px" }}
                          src="https://res.cloudinary.com/image/upload/c_scale,w_120/v1563693973/red-herring-Asia_Winner-codewave-technology-awards-asia-india_jtasie.jpg"
                          className="lazyload"
                        />
                      </a>
                      <a
                        href="https://www.goodfirms.co/company/codewave"
                        target="_blank"
                      >
                        <img
                          style={{ paddingRight: "20px", height: "130px" }}
                          src="https://goodfirms.s3.amazonaws.com/badges/normal-badge/app-development.svg"
                          className="lazyload"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="row justify-content-center no-gutters">
                    <div className="col-sm-4 col-md-4 col-lg-3">
                      <div className="txt--p6">
                        © 2020 Codewave Technologies.{" "}
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-5">
                      <div className="txt--p6">
                        <a href="./privacy-policy">Privacy Policy</a> ·{" "}
                        <a href="./cookie-policy">Cookie Policy</a> ·{" "}
                        <a href="./terms-and-conditions">
                          Terms and conditions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cookies">
            <div className="cookies__content">
              <p>
                We use cookies to improve your browsing experience. You consent
                to our <a href="./cookie-policy">cookies policy</a> if you
                continue to use this website.
              </p>
              <button className="cookies__button">Accept</button>
              <button className="cookies__close-btn">
                <svg
                  width="13px"
                  height="13px"
                  viewBox="0 0 13 13"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="square"
                  >
                    <g
                      transform="translate(-1512.000000, -759.000000)"
                      stroke="#FFFFFF"
                      stroke-width="2"
                    >
                      <g transform="translate(1334.000000, 742.000000)">
                        <g transform="translate(179.000000, 18.000000)">
                          <path
                            d="M5.60286131,-1.34450711 L5.60286131,12.5502297"
                            transform="translate(5.602861, 5.602861) rotate(-315.000000) translate(-5.602861, -5.602861) "
                          ></path>
                          <path
                            d="M5.60286131,-1.34450711 L5.60286131,12.5502297"
                            transform="translate(5.602861, 5.602861) rotate(-45.000000) translate(-5.602861, -5.602861) "
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="overlay"></div>
    </>
  )
}

export default IndexPage
