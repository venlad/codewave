import { Link } from "gatsby";
import React from "react";

const SuccessStories = ({ data, title = "Success Stories" }) => {
  return (
    <>
      <div className="module works">
        <div className="container-fluid">
          <div
            className={`row no-gutters ${
              title === "Success Stories" && "justify-content-end"
            } padding_on_top`}
          >
            {title !== "Success Stories" && <div className="col-sm-1"></div>}
            <h2
              className="title--title4 is-visible"
              style={{
                opacity: 1,
                transform: "matrix(1,0,0,1,0,0)",
                marginBottom: "50px",
                left: "30px",
              }}
            >
              <span className="title__number"></span>
              {title}
            </h2>
            {title === "Success Stories" && <div className="col-sm-1"></div>}
          </div>

          <div className="row no-gutters padding_on_top">
            <div className="col-sm-2"></div>
            {data?.map((item, i) => (
              <div className="col-sm-3 col-md-3">
                <Link
                  to={data?.link}
                  target="_blank"
                  className="work-item is-visible"
                >
                  <h2
                    className="title--title6 mob-padding-30 is-visible"
                    style={{
                      width: "90%",
                    }}
                  >
                    {item?.title}
                  </h2>

                  <div className="txt--p3">
                    <img
                      className="lazyload mobcenter"
                      src={`${item?.storyImage?.data?.attributes?.url}`}
                      style={{
                        transformOrigin: "center 50% 0px",
                        transform: "matrix(1, 0, 0, 1, 0, 0)",
                      }}
                      alt="codewave design thinking casestudy: Toppscholars web and mobile apps"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
