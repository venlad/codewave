import React from "react"

const CookiesInfo = () => {
  return (
    <>
      <div className="cookies">
        <div className="cookies__content">
          <p>
            We use cookies to improve your browsing experience. You consent to
            our <a href="/cookie-policy">cookies policy</a> if you continue to
            use this website.
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
    </>
  )
}

export default CookiesInfo
