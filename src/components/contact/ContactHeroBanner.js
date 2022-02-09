import React from "react"
import useWindowSize from "../../hooks/useWindowSize"

const ContactHeroBanner = ({ contact }) => {
  const { width } = useWindowSize()

  return (
    <>
      <div className="about__image1">
        <div className="container-fluid">
          <div
            className="row justify-content-center no-gutters"
            style={{ textAlign: "center" }}
          >
            <div className="col-sm-12 ">
              <div className="img-fluid">
                <a
                  href="https://vidhya10.typeform.com/to/jhletM"
                  target="_blank"
                >
                  {width > 767 ? (
                    <img
                      src={
                        contact?.heroBgLarge?.data?.attributes?.localFile
                          ?.childImageSharp?.fluid?.src
                      }
                      className=" lazyload"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        marginTop: "-35px",
                        width: "90%",
                        maxHeight: "395px",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <img
                      src={
                        contact?.heroBgSmall?.data?.attributes?.localFile
                          ?.childImageSharp?.fluid?.src
                      }
                      className=" lazyload"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        marginTop: "-35px",
                      }}
                    />
                  )}
                </a>

                <a
                  className="typeform-share button"
                  href="https://vidhya10.typeform.com/to/jhletM"
                  target="_blank"
                >
                  {" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactHeroBanner
