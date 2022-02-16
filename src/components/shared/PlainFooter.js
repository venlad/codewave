import { Link } from "gatsby"
import React from "react"

const PlainFooter = ({ handleMouse, arabic }) => {
  return (
    <>
      <div className="footer">
        <div className="container-fluid">
          <div className="row justify-content-center no-gutters">
            <div className="col-sm-4 col-md-4 col-lg-3">
              <div className="txt--p6">© 2020 Codewave Technologies. </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-5">
              <div className="txt--p6">
                <Link
                  to={arabic ? "/ar/privacy-policy" : "/privacy-policy"}
                  onMouseEnter={() => handleMouse(40, "")}
                  onMouseLeave={() => handleMouse(12, "")}
                >
                  Privacy Policy
                </Link>{" "}
                ·{" "}
                <Link
                  to={arabic ? "/ar/cookie-policy" : "/cookie-policy"}
                  onMouseEnter={() => handleMouse(40, "")}
                  onMouseLeave={() => handleMouse(12, "")}
                >
                  Cookie Policy
                </Link>{" "}
                ·{" "}
                <Link
                  to={
                    arabic
                      ? "/ar/terms-and-conditions"
                      : "/terms-and-conditions"
                  }
                  onMouseEnter={() => handleMouse(40, "")}
                  onMouseLeave={() => handleMouse(12, "")}
                >
                  Terms and conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlainFooter
