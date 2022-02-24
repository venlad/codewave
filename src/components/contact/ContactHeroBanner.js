import React from "react"
import useWindowSize from "../../hooks/useWindowSize"
import GatsbyImageReveal from "../shared/GatsbyImageReveal"
import RevealImage from "../shared/RevealImage"

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
                  {width > 767 && (
                    <div
                      style={{
                        margin: "0 auto",
                        marginTop: "-35px",
                        width: "90%",
                        minHeight: "380px",
                        maxHeight: "395px",
                      }}
                    >
                      <GatsbyImageReveal
                        src={contact?.heroBgLarge?.data?.attributes?.localFile}
                      />
                    </div>
                  )}

                  {width <= 767 && (
                    <div
                      style={{
                        margin: "0 auto",
                        width: "320px",
                        height: "520px",
                      }}
                    >
                      <GatsbyImageReveal
                        src={contact?.heroBgSmall?.data?.attributes?.localFile}
                      />
                    </div>
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
