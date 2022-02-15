import React from "react"
import RevealImage from "../components/shared/RevealImage"

export default function Home() {
  return (
    <div style={{ width: "500px", height: "700px" }}>
      Hello world!
      <RevealImage>
        <img
          className="img-fluid"
          style={{ objectFit: "cover" }}
          src={
            "https://dev-codewave.vercel.app/static/fffc0d1641b67fa131ccf7b9d0a0407b/e2788/Codewave_Technologists_helping_business_with_digital_transformation_nsz5d8_1_c22c051027.jpg"
          }
          alt=""
        />
      </RevealImage>
      <div style={{ width: "500px", height: "1200px", background: "pink" }} />
      <RevealImage>
        <img
          className="img-fluid"
          style={{ objectFit: "cover" }}
          src={
            "https://dev-codewave.vercel.app/static/fffc0d1641b67fa131ccf7b9d0a0407b/e2788/Codewave_Technologists_helping_business_with_digital_transformation_nsz5d8_1_c22c051027.jpg"
          }
          alt=""
        />
      </RevealImage>
      <div style={{ width: "500px", height: "1200px", background: "pink" }} />
    </div>
  )
}
