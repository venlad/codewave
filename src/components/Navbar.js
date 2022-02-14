import React, { useEffect, useState } from "react"
import Star8 from "../images/star8.png"
import Star2 from "../images/star2.png"
import Star1 from "../images/star1.png"
import { Link } from "gatsby"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const menuToggle = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (document) {
      if (open) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "unset"
      }
    }
  }, [open])

  return (
    <>
      <div id="cursor">
        <div className="cursor__label"></div>
        <div className="cursor__bg"></div>
      </div>
      <div className="logo">
        <a
          href="#"
          onclick="window.location.href = window.location.origin;"
          className="magnetize  is-current "
        >
          <img
            width="140px"
            src="https://codewave.gumlet.io/image/upload/c_scale,w_140/v1566712787/codewave-logo-2x_tl2pvw.png?w=100&dpr=0.8"
            className="lazyload"
          />
        </a>
      </div>
      <div className="say-hello">
        <Link to="/contact" className="magnetize">
          Contact
        </Link>
      </div>

      <div
        className={open ? "toggle magnetize is-open" : "toggle  magnetize"}
        onClick={menuToggle}
      >
        <p
          style={{
            marginTop: "-8px",
            marginBottom: "5px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          MENU
        </p>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className={open ? "nav d-block " : "nav "}>
        <div className="nav__bg"></div>
        <div className="nav__container">
          <div className="logo--mobile logo--mobile--white">
            <Link to="/" className=" is-current ">
              <img
                width="140px"
                src="https://res.cloudinary.com/image/upload/c_scale,w_140/v1566712787/codewave-logo-2x_tl2pvw.png"
                className="lazyload"
              />
            </Link>
          </div>
          <div className="nav__primary">
            <ul className="servicesUl">
              <li style={{ opacity: 1 }}>
                <Link to="/services" className="">
                  <div className="number-mask">
                    <div>01.</div>
                  </div>
                  Services x.o
                </Link>
              </li>
              <li style={{ opacity: 1 }}>
                <Link to="/industries" className="">
                  <div className="number-mask">
                    <div>02.</div>
                  </div>
                  Cross-industry
                </Link>
              </li>
              <li style={{ opacity: 1 }}>
                <a
                  target="_blank"
                  href="https://casestudies.codewave.com"
                  className=""
                >
                  <div className="number-mask">
                    <div>03.</div>
                  </div>
                  Casestudies
                </a>
              </li>
              <li style={{ opacity: 1 }}>
                <a
                  target="_blank"
                  href="https://insights.codewave.com"
                  className=""
                >
                  <div className="number-mask">
                    <div>04.</div>
                  </div>
                  Insights
                </a>
              </li>

              <li style={{ opacity: 1 }}>
                <Link to="/careers" className="">
                  <div className="number-mask">
                    <div>05.</div>
                  </div>
                  Join us
                </Link>
              </li>

              <li style={{ opacity: 1 }}>
                <Link to="/contact" className="">
                  <div className="number-mask">
                    <div>06.</div>
                  </div>
                  Contact us
                </Link>
              </li>
            </ul>
            <ul className="starflex" style={{ marginTop: "66px" }}>
              <li style={{ opacity: 1 }}>
                <a
                  href="https://clutch.co/profile/codewave-technologies"
                  target="_blank"
                  className="reviewMenu"
                >
                  {" "}
                  <span className="starText">Clutch</span>{" "}
                  <img src={Star8} className="starImg" />{" "}
                </a>
              </li>

              <li style={{ opacity: 1 }}>
                <a
                  href="https://www.google.com/search?q=codewave+google&oq=codewave+google&aqs=chrome..69i57j69i60.5468j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3bae1410cbe3d455:0x24ccaa47ae085263,1,,"
                  target="_blank"
                  className="reviewMenu"
                >
                  <span className="starText">Google</span>{" "}
                  <img src={Star2} className="starImg" />{" "}
                </a>
              </li>
            </ul>
            <ul className="starflex">
              <li style={{ opacity: 1 }}>
                <a
                  href="https://www.glassdoor.co.in/Overview/Working-at-Codewave-EI_IE850469.11,19.htm"
                  target="_blank"
                  className="reviewMenu"
                >
                  <span className="starText" style={{ paddingLeft: "25px" }}>
                    Glassdoor
                  </span>{" "}
                  <img src={Star1} className="starImg" />{" "}
                </a>
              </li>

              <li style={{ opacity: 1 }}>
                <a
                  href="https://www.facebook.com/codewave.inc/"
                  target="_blank"
                  className="reviewMenu"
                >
                  {" "}
                  <span className="starText" style={{ paddingLeft: "25px" }}>
                    Facebook
                  </span>{" "}
                  <img src={Star8} className="starImg" />{" "}
                </a>
              </li>
            </ul>
          </div>
          <div
            className="nav__secondary"
            style={{ marginRight: "5vw", opacity: 1 }}
          >
            <h4
              className="title--title6"
              style={{
                fontSize: "24px",
                color: "white",
                marginBottom: "20px",
                textDecoration: "underline",
              }}
            >
              Top market needs
            </h4>
            <ul>
              <li style={{ opacity: 1 }}>
                <a href="/services/design-thinking">Design-thinking.</a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/services/customer-journey-redesign-cx-improvement">
                  Customer Journey design.
                </a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/services/digital-business-transformation">
                  Digital innovation.
                </a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/services/data-strategy-analytics-and-predictive-intelligence">
                  {" "}
                  Analytics & predictions.
                </a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/services/cloud-web-mobility">
                  Serverless Web & Mobile.
                </a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/services/iot-sensing-tech-and-edge-tech">
                  IoT & Edge AI.
                </a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/services/artificial-intelligence-and-machine-learning">
                  Enterprise AI/ML.
                </a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/services/blockchain-implementation">Blockchain.</a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/services/process-automation">Process Automation.</a>
              </li>
            </ul>
          </div>

          <div
            className="nav__secondary"
            style={{ marginRight: "5vw", opacity: 1 }}
          >
            <h4
              className="title--title6"
              style={{
                fontSize: "24px",
                color: "white",
                marginBottom: "20px",
                marginTop: "50px",
                textDecoration: "underline",
              }}
            >
              Industry ecosystems
            </h4>
            <ul>
              <li style={{ opacity: 1 }}>
                <a href="/industries/education">Education.</a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/industries/healthcare">Healthcare.</a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/industries/fintech">Finance & banking.</a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/industries/agriculture">Agriculture.</a>
              </li>

              <li style={{ opacity: 1 }}>
                <a href="/industries/transport">Transportation.</a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/industries/travel-hospitality">
                  Travel & hospitality.
                </a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/industries/energy">Energy.</a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/industries/retail">Retail & food.</a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/industries/insurance">Insurance.</a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="https://casestudies.codewave.com/category/more/">
                  More..
                </a>
              </li>
            </ul>
          </div>
          <div
            className="nav__secondary"
            style={{ marginRight: "5vw", opacity: 1 }}
          >
            <h4
              className="title--title6"
              style={{
                fontSize: "24px",
                color: "white",
                marginBottom: "20px",
                textDecoration: "underline",
                marginTop: "7px",
              }}
            >
              Culture & DNA
            </h4>
            <ul>
              <li style={{ opacity: 1 }}>
                <a href="/about">The purpose.</a>
              </li>
              <li style={{ opacity: 1 }}>
                <a
                  target="_blank"
                  href="https://res.cloudinary.com/codewave-technologies/image/upload/v1575216128/codewave-employee-handbook_qzos5o.pdf"
                >
                  Culture guide.
                </a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/the-survival-manual">Survival manual.</a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/timely" target="_blank">
                  Timely.
                </a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/customer-journey">Project journeys.</a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="/leadership-cafe">Leadership-café.</a>
              </li>

              <li style={{ opacity: 1 }}>
                <a href="/growing-as-a-leader-at-codewave">
                  Growing as a leader.
                </a>
              </li>
              <li style={{ opacity: 1 }}>
                <a
                  href="https://insights.codewave.com/why-organisation-as-social-network-is-the-future/"
                  target="_blank"
                >
                  Org as a social network.
                </a>
              </li>

              <li style={{ opacity: 1 }}>
                <a
                  href="https://medium.com/codewave"
                  style={{ float: "left" }}
                  target="_blank"
                >
                  <img
                    src="https://codewave.gumlet.io/image/upload/c_scale,w_30/v1579333663/medium_geo6zf.png?w=50&dpr=0.8"
                    style={{ float: "left" }}
                    className="lazyload"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/codewave-inc"
                  target="_blank"
                  style={{ float: "left", marginLeft: "30px" }}
                >
                  <img
                    src="https://codewave.gumlet.io/image/upload/c_scale,w_30/v1579333662/linkedin_qyquet.png?w=50&dpr=0.8"
                    style={{ float: "left" }}
                    className="lazyload"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
